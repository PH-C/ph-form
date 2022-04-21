<template>
  <div class="forms">
    <!-- <div class="title">111{{ formObj.title }}</div> -->
    <el-form
      :ref="formObj.ref"
      :model="formObj.data"
      :label-width="formObj.labelWidth"
      :rules="formObj.rules"
      :inline="formObj.inline"
      :label-position="formObj.labelPosition || 'left'"
    >
      <el-row v-for="(formItem, index) in formObj.formItemArr" :key="index">
        <template v-if="Array.isArray(formItem)">
          <el-col
            v-for="(fItem, fIdx) in formItem"
            :key="fIdx"
            :span="fItem.span"
          >
            <template v-if="fItem.type === 'slot'">
              <slot :name="fItem.name" />
            </template>
            <el-form-item
              v-else
              :prop="fItem.prop"
              :label="fItem.label"
              :label-width="fItem.labelWidth || formObj.labelWidth"
            >
              <!-- 分组 -->
              <template v-if="fItem.type === 'group'">
                <div class="group-cnt">
                  <i :class="fItem.icon" />
                  <span>{{ fItem.text }}</span>
                </div>
              </template>

              <!-- 普通输入框 -->
              <template
                v-else-if="fItem.type === 'el-input' && fItem.vaiNumber"
              >
                <el-input
                  v-model.number="formObj['data'][fItem.prop]"
                  :placeholder="fItem.placeholder"
                  :disabled="fItem.disabled || false"
                  :maxlength="fItem.maxlength"
                  show-word-limit
                />
              </template>
              <template v-else-if="fItem.type === 'el-input'">
                <el-input
                  v-model="formObj['data'][fItem.prop]"
                  :placeholder="fItem.placeholder"
                  :disabled="fItem.disabled || false"
                  :maxlength="fItem.maxlength"
                  @keyup.enter.native="handleEvent(fItem.event, fItem)"
                  show-word-limit
                >
                  <template v-if="fItem.unit" slot="append">
                    {{ fItem.unit }}
                  </template>
                  <template v-else-if="fItem.unitBtn" slot="append">
                    <el-button
                      type="primary"
                      @click="() => handleEvent(fItem.unitBtnEvent, fItem)"
                    >
                      {{ fItem.unitBtn }}
                    </el-button>
                  </template>
                </el-input>
              </template>
              <!-- 计数器输入框 -->
              <template v-else-if="fItem.type === 'el-input-number'">
                <el-input-number
                  v-model="formObj['data'][fItem.prop]"
                  controls-position="right"
                  :precision="fItem.precision || 0"
                  :placeholder="fItem.placeholder"
                  :disabled="fItem.disabled || false"
                  :min="fItem.min || 0"
                  :max="fItem.max || Infinity"
                >
                  <template v-if="fItem.unit" slot="append">
                    {{ fItem.unit }}
                  </template>
                </el-input-number>
              </template>
              <!-- 多选 -->
              <template v-else-if="fItem.type === 'el-checkbox'">
                <el-checkbox-group
                  v-model="formObj['data'][fItem.prop]"
                  :disabled="fItem.disabled || false"
                >
                  <el-checkbox
                    v-for="(cItem, cIdx) in fItem.datas"
                    :key="cIdx"
                    :label="cItem.label"
                    name="type"
                  />
                </el-checkbox-group>
              </template>
              <!-- 单选 -->
              <template v-else-if="fItem.type === 'el-radio'">
                <el-radio-group
                  v-model="formObj['data'][fItem.prop]"
                  :disabled="fItem.disabled || false"
                  @change="(val) => handleEvent(fItem.event, val)"
                >
                  <el-radio
                    v-for="(rItem, rIdx) in fItem.datas"
                    :key="rIdx"
                    :label="rItem.label"
                  />
                </el-radio-group>
              </template>
              <!-- 选择框 -->
              <template v-else-if="fItem.type === 'el-select'">
                <el-select
                  v-model="formObj['data'][fItem.prop]"
                  :multiple="fItem.multiple"
                  :placeholder="fItem.placeholder"
                  :disabled="fItem.disabled || false"
                  @change="(val) => handleEvent(fItem.event || fItem.prop, val)"
                >
                  <el-option
                    v-for="(oItem, idx) in fItem.options"
                    :key="idx"
                    :label="oItem.label"
                    :value="oItem.value"
                  />
                </el-select>
              </template>

              <!-- 选择框 -->
              <template v-else-if="fItem.type === 'el-cascader'">
                <el-cascader
                  v-model="formObj['data'][fItem.prop]"
                  :options="fItem.options"
                  :props="fItem.props"
                  :show-all-levels="fItem.showAllLevels"
                  clearable
                  filterable
                  :placeholder="fItem.placeholder"
                  @change="(val) => handleEvent(fItem.event || fItem.prop, val)"
                />
              </template>
              <!-- 文本域 -->
              <template v-else-if="fItem.type === 'el-textarea'">
                <el-input
                  v-model="formObj['data'][fItem.prop]"
                  type="textarea"
                  :rows="fItem.rows || 3"
                  :disabled="fItem.disabled || false"
                  :maxlength="fItem.maxlength"
                  show-word-limit
                />
              </template>
              <!-- 开关 -->
              <template v-else-if="fItem.type === 'el-switch'">
                <el-switch
                  v-model="formObj['data'][fItem.prop]"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :disabled="fItem.disabled || false"
                />
              </template>
              <!-- 日期选择器 -->
              <template v-else-if="fItem.type === 'el-date-picker'">
                <el-date-picker
                  v-model="formObj['data'][fItem.prop]"
                  :placeholder="fItem.placeholder"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :type="fItem.selectType"
                  style="width: 100%"
                  :value-format="
                    fItem.valformat ? fItem.valformat : 'yyyy-MM-dd'
                  "
                  :default-time="fItem.defaultTime || ['00:00:00', '23:59:59']"
                  :disabled="fItem.disabled || false"
                  @change="(val) => handleEvent(fItem.event || fItem.prop, val)"
                />
              </template>
              <!-- 时间选择器 -->
              <template v-else-if="fItem.type === 'el-time-picker'">
                <el-time-picker
                  v-model="formObj['data'][fItem.prop]"
                  :is-range="fItem.isRange"
                  :placeholder="fItem.placeholder"
                  :picker-options="fItem.pickerOptions"
                  :value-format="fItem.valformat ? fItem.valformat : 'HH:mm:ss'"
                  :disabled="fItem.disabled || false"
                />
              </template>
              <!-- 文件上传 -->

              <template v-else-if="fItem.type === 'el-upload-pic'">
                <el-upload
                  :file-list="Array.from(formObj['data'][fItem.prop] || [])"
                  :disabled="fItem.disabled"
                  :action="fItem.action || $FILE_UPLOAD_API"
                  :class="{
                    hide:
                      formItem.limit <= 1 &&
                      formObj['data'][formItem.prop].length >= 1,
                  }"
                  list-type="picture-card"
                  :limit="fItem.limit || 3"
                  :multiple="fItem.multiple || true"
                  :accept="fItem.accept || 'image/*'"
                  :on-preview="(file) => handlePictureCardPreview(file, index)"
                  :on-remove="(file) => handleRemove(fItem, file, index)"
                  :on-change="
                    (file, fileList) => onChangeFile(formItem, file, fileList)
                  "
                  :on-exceed="$message.error.bind(this, '文件超出上传长度')"
                >
                  <i slot="default" class="el-icon-plus" />
                  <div slot="file" slot-scope="{ file }">
                    <video
                      v-if="fItem.accept && fItem.accept.indexOf('video') > -1"
                      :src="file.url"
                      class="el-upload-list__item-thumbnail"
                      controls="controls"
                    >
                      您的浏览器不支持视频播放
                    </video>
                    <img
                      v-else-if="
                        fItem.accept && fItem.accept.indexOf('image') > -1
                      "
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />
                    <img
                      v-else
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />

                    <span class="el-upload-list__item-actions">
                      <span
                        v-if="
                          fItem.accept && fItem.accept.indexOf('video') > -1
                        "
                        class="el-upload-list__item-preview"
                        @click="handleVideoCardPreview(file, index)"
                      >
                        <i class="el-icon-zoom-in" />
                      </span>
                      <span
                        v-else
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file, index)"
                      >
                        <i class="el-icon-zoom-in" />
                      </span>

                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <i class="el-icon-download" />
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(fItem, file, index)"
                      >
                        <i class="el-icon-delete" />
                      </span>
                    </span>
                  </div>
                </el-upload>
              </template>

              <!-- 文件上传 -->
              <template v-else-if="fItem.type === 'el-upload-file'">
                <el-upload
                  :action="fItem.action || $FILE_UPLOAD_API"
                  :disabled="fItem.disabled"
                  :on-remove="(file) => handleRemove(fItem, file, index)"
                  multiple
                  :limit="fItem.limit || 5"
                  :accept="fItem.accept || 'image/*'"
                  :file-list="Array.from(formObj[fItem.prop] || [])"
                  :on-change="
                    (file, fileList) => onChangeFile(formItem, file, fileList)
                  "
                >
                  <el-button size="small" type="primary"> 点击上传 </el-button>
                  <!-- <div slot="tip" class="el-upload__tip">点击上传文件</div> -->
                </el-upload>
              </template>
              <!-- 操作按钮 -->
              <template v-else-if="fItem.type === 'el-button'">
                <template v-for="(btn, btnIdx) in fItem.btns">
                  <el-button
                    v-if="btn.event === 'submit'"
                    :key="btnIdx"
                    :icon="btn.icon"
                    :type="btn.type"
                    @click="() => submitForm(formObj.ref, btn.event)"
                  >
                    {{ btn.name }}
                  </el-button>
                  <el-button
                    v-else-if="btn.event === 'reset'"
                    :key="btnIdx"
                    :icon="btn.icon"
                    @click="resetForm(formObj.ref, btn.event)"
                  >
                    {{ btn.name }}
                  </el-button>
                  <el-button
                    v-else
                    :key="btnIdx"
                    :icon="btn.icon"
                    :type="btn.type"
                    @click="() => handleEvent(btn.event)"
                  >
                    {{ btn.name }}
                  </el-button>
                </template>
              </template>

              <!-- 按钮之间无间隔的按钮组组件-转介绍单选 -->
              <template v-else-if="fItem.type === 'el-radio-btn-group'">
                <el-radio-group
                  v-model="formObj['data'][fItem.prop]"
                  @change="(val) => handleEvent(fItem.event, val)"
                >
                  <el-radio-button
                    v-for="(itema, indexs) in fItem.options"
                    :key="indexs"
                    :label="itema.label"
                  >
                    {{ itema.value }}
                  </el-radio-button>
                </el-radio-group>
              </template>
              <!-- 按钮之间带有间隔的按钮组组件-（转介绍城市单选） -->
              <template v-else-if="fItem.type === 'el-radio-spaceBtn-group'">
                <div class="asd">
                  <el-radio-group
                    v-model="formObj['data'][fItem.prop]"
                    @change="
                      (val) => handleEvent(fItem.event || fItem.prop, val)
                    "
                  >
                    <el-radio-button
                      v-for="(itema, indexs) in fItem.options"
                      :key="indexs"
                      :label="itema.label"
                      class="bot"
                    >
                      {{ itema.value }}
                    </el-radio-button>
                  </el-radio-group>
                </div>
              </template>
              <!-- 转介绍时间漏斗 -->
              <template v-else-if="fItem.type === 'el-date-check'">
                <el-checkbox
                  type="checkbox"
                  v-model="formObj['data'][fItem.prop]"
                  @click="
                    formObj['data'][fItem.prop] = !formObj['data'][fItem.prop]
                  "
                  @change="disabledShow(formObj['data'][fItem.prop])"
                />
                漏斗查询
              </template>
              <template v-else-if="fItem.type === 'el-date-introductPicker'">
                <el-date-picker
                  v-model="formObj['data'][fItem.prop]"
                  :disabled="disabledTemp"
                  :type="fItem.selectType"
                  placeholder="选择日期"
                  :picker-options="fItem.pickerOptions"
                  :value-format="
                    fItem.valformat ? fItem.valformat : 'yyyy-MM-dd'
                  "
                >
                </el-date-picker>
              </template>

              <!-- 默认普通框 -->
              <template v-else>
                <!-- <el-input
                  v-model="formObj['data'][fItem.prop]"
                  :placeholder="fItem.placeholder"
                  :disabled="fItem.disabled || false"
                /> -->
              </template>
            </el-form-item>
          </el-col>
        </template>
        <template v-else>
          <el-col :span="formItem.span">
            <template v-if="formItem.type === 'slot'">
              <slot :name="formItem.name" />
            </template>
            <el-form-item
              v-else
              :prop="formItem.prop"
              :label="formItem.label"
              :label-width="formItem.labelWidth || formObj.labelWidth"
            >
              <!-- 普通输入框 -->
              <template
                v-if="formItem.type === 'el-input' && formItem.vaiNumber"
              >
                <el-input
                  v-model.number="formObj['data'][formItem.prop]"
                  :placeholder="formItem.placeholder"
                  :disabled="formItem.disabled || false"
                  :maxlength="formItem.maxlength"
                  show-word-limit
                />
              </template>
              <template v-else-if="formItem.type === 'el-input'">
                <el-input
                  v-model="formObj['data'][formItem.prop]"
                  :placeholder="formItem.placeholder"
                  :disabled="formItem.disabled || false"
                  :maxlength="formItem.maxlength"
                  show-word-limit
                >
                  <template v-if="formItem.unit" slot="append">
                    {{ formItem.unit }}
                  </template>
                  <template v-else-if="formItem.unitBtn" slot="append">
                    <el-button
                      type="primary"
                      @click="
                        () => handleEvent(formItem.unitBtnEvent, formItem)
                      "
                    >
                      {{ formItem.unitBtn }}
                    </el-button>
                  </template>
                </el-input>
              </template>
              <!-- 密码普通输入框 -->
              <template v-else-if="formItem.type === 'el-password-input'">
                <el-input
                  v-model="formObj['data'][formItem.prop]"
                  :placeholder="formItem.placeholder"
                  show-password
                  :disabled="formItem.disabled || false"
                  :maxlength="formItem.maxlength"
                  show-word-limit
                >
                  <template v-if="formItem.unit" slot="append">
                    {{ formItem.unit }}
                  </template>
                </el-input>
              </template>
              <!-- 计数器输入框 -->
              <template v-else-if="formItem.type === 'el-input-number'">
                <el-input-number
                  v-model="formObj['data'][formItem.prop]"
                  controls-position="right"
                  :precision="formItem.precision || 0"
                  :placeholder="formItem.placeholder"
                  :disabled="formItem.disabled || false"
                  :min="formItem.min || 0"
                  :max="formItem.max || Infinity"
                >
                  <template v-if="formItem.unit" slot="append">
                    {{ formItem.unit }}
                  </template>
                </el-input-number>
              </template>
              <!-- 选择框 -->
              <template v-else-if="formItem.type === 'el-select'">
                <el-select
                  v-model="formObj['data'][formItem.prop]"
                  :multiple="formItem.multiple"
                  :placeholder="formItem.placeholder"
                  :disabled="formItem.disabled || false"
                  @change="
                    (val) => handleEvent(formItem.event || formItem.prop, val)
                  "
                >
                  <el-option
                    v-for="(oItem, idx) in formItem.options"
                    :key="idx"
                    :label="oItem.label"
                    :value="oItem.value"
                  />
                </el-select>
              </template>

              <!-- 级联选择框 -->
              <template v-else-if="formItem.type === 'el-cascader'">
                <el-cascader
                  v-model="formObj['data'][formItem.prop]"
                  :options="formItem.options"
                  :props="formItem.props"
                  :show-all-levels="formItem.showAllLevels"
                  clearable
                  filterable
                  :placeholder="formItem.placeholder"
                  @change="
                    (val) => handleEvent(formItem.event || formItem.prop, val)
                  "
                />
              </template>
              <!-- 文件上传 -->
              <template v-else-if="formItem.type === 'el-upload-pic'">
                <el-upload
                  :file-list="Array.from(formObj['data'][formItem.prop] || [])"
                  :disabled="formItem.disabled"
                  :action="formItem.action || $FILE_UPLOAD_API"
                  list-type="picture-card"
                  :limit="formItem.limit || 3"
                  :multiple="formItem.multiple || true"
                  :class="{
                    hide:
                      formItem.limit === 6 &&
                      formObj['data'][formItem.prop].length === 6,
                  }"
                  :accept="formItem.accept || 'image/*'"
                  :on-preview="(file) => handlePictureCardPreview(file, index)"
                  :on-remove="(file) => handleRemove(formItem, file, index)"
                  :on-change="
                    (file, fileList) => onChangeFile(formItem, file, fileList)
                  "
                  :on-exceed="$message.error.bind(this, '文件超出上传长度')"
                >
                  <i slot="default" class="el-icon-plus" />
                  <div slot="file" slot-scope="{ file }">
                    <!-- <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url.split(',')"
                      alt=""
                    > -->

                    <video
                      v-if="
                        formItem.accept && formItem.accept.indexOf('video') > -1
                      "
                      :src="file.url"
                      class="el-upload-list__item-thumbnail"
                      controls="controls"
                    >
                      您的浏览器不支持视频播放
                    </video>
                    <img
                      v-else
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />

                    <span class="el-upload-list__item-actions">
                      <span
                        v-if="
                          formItem.accept &&
                          formItem.accept.indexOf('video') > -1
                        "
                        class="el-upload-list__item-preview"
                        @click="handleVideoCardPreview(file, index)"
                      >
                        <i class="el-icon-zoom-in" />
                      </span>

                      <span
                        v-else
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file, index)"
                      >
                        <i class="el-icon-zoom-in" />
                      </span>

                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <i class="el-icon-download" />
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(formItem, file, index)"
                      >
                        <i class="el-icon-delete" />
                      </span>
                    </span>
                  </div>
                </el-upload>
              </template>

              <!-- 文件上传 -->
              <template v-else-if="formItem.type === 'el-upload-file'">
                <el-upload
                  :action="formItem.action || $FILE_UPLOAD_API"
                  :disabled="formItem.disabled"
                  :on-remove="(file) => handleRemove(formItem, file, index)"
                  multiple
                  :limit="formItem.limit || 5"
                  :accept="formItem.accept || 'image/*'"
                  :file-list="Array.from(formObj[formItem.prop] || [])"
                  :on-change="
                    (file, fileList) => onChangeFile(formItem, file, fileList)
                  "
                >
                  <el-button size="small" type="primary"> 点击上传 </el-button>
                  <!-- <div slot="tip" class="el-upload__tip">点击上传文件</div> -->
                </el-upload>
              </template>
              <!-- 日期选择器 -->
              <template v-else-if="formItem.type === 'el-date-picker'">
                <el-date-picker
                  v-model="formObj['data'][formItem.prop]"
                  :placeholder="formItem.placeholder"
                  :type="formItem.selectType"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  style="width: 100%"
                  :value-format="
                    formItem.valformat ? formItem.valformat : 'yyyy-MM-dd'
                  "
                  :default-time="
                    formItem.defaultTime || ['00:00:00', '23:59:59']
                  "
                  :disabled="formItem.disabled || false"
                />
              </template>
              <!-- 时间选择器 -->
              <template v-else-if="formItem.type === 'el-time-picker'">
                <el-time-picker
                  v-model="formObj['data'][formItem.prop]"
                  :is-range="formItem.isRange"
                  :placeholder="formItem.placeholder"
                  :picker-options="formItem.pickerOptions"
                  :value-format="
                    formItem.valformat ? formItem.valformat : 'HH:mm:ss'
                  "
                  :disabled="formItem.disabled || false"
                />
              </template>
              <!-- 开关 -->
              <template v-else-if="formItem.type === 'el-switch'">
                <el-switch
                  v-model="formObj['data'][formItem.prop]"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :disabled="formItem.disabled || false"
                />
              </template>
              <!-- 多选 -->
              <template v-else-if="formItem.type === 'el-checkbox'">
                <el-checkbox-group
                  v-model="formObj['data'][formItem.prop]"
                  :disabled="formItem.disabled || false"
                >
                  <el-checkbox
                    v-for="(cItem, cIdx) in formItem.datas"
                    :key="cIdx"
                    :label="cItem.label"
                    name="type"
                  />
                </el-checkbox-group>
              </template>
              <!-- 单选 -->
              <template v-else-if="formItem.type === 'el-radio'">
                <el-radio-group
                  v-model="formObj['data'][formItem.prop]"
                  :disabled="formItem.disabled || false"
                  @change="(val) => handleEvent(formItem.event, val)"
                >
                  <el-radio
                    v-for="(rItem, rIdx) in formItem.datas"
                    :key="rIdx"
                    :label="rItem.label"
                  />
                </el-radio-group>
              </template>
              <!-- 文本域 -->
              <template v-else-if="formItem.type === 'el-textarea'">
                <el-input
                  v-model="formObj['data'][formItem.prop]"
                  type="textarea"
                  :rows="formItem.rows || 3"
                  :disabled="formItem.disabled || false"
                  :maxlength="formItem.maxlength"
                  :placeholder="formItem.placeholder"
                  show-word-limit
                />
              </template>
              <!-- 操作按钮 -->
              <template v-else-if="formItem.type === 'el-button'">
                <template v-for="(btn, btnIdx) in formItem.btns">
                  <el-button
                    v-if="btn.event === 'submit'"
                    :key="btnIdx"
                    :type="btn.type"
                    @click="() => submitForm(formObj.ref, btn.event)"
                  >
                    {{ btn.name }}
                  </el-button>
                  <el-button
                    v-else-if="btn.event === 'reset'"
                    :key="btnIdx"
                    @click="resetForm(formObj.ref, btn.event)"
                  >
                    {{ btn.name }}
                  </el-button>
                  <el-button
                    v-else
                    :key="btnIdx"
                    :type="btn.type"
                    @click="() => handleEvent(btn.event)"
                  >
                    {{ btn.name }}
                  </el-button>
                </template>
              </template>

              <!-- 默认普通框 -->
              <template v-else>
                <!-- <el-input
                  v-model="formObj['data'][formItem.prop]"
                  :placeholder="formItem.placeholder"
                  :disabled="formItem.disabled || false"
                /> -->
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <el-dialog
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      append-to-body
    >
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <el-dialog
      :visible.sync="videoDialogVisible"
      :close-on-click-modal="false"
      append-to-body
    >
      <video
        width="100%"
        :src="dialogVideoUrl"
        class="el-upload-list__item-thumbnail"
        controls="controls"
      />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ph-form",
  props: {
    formObj: {
      default: () => {},
      required: true,
    },
  },
  data: () => {
    return {
      dialogImageUrl: "",
      dialogVideoUrl: "",
      dialogVisible: false,
      videoDialogVisible: false,
      disabled: false,
      hideUpload: false,
      show: false,
      disabledTemp: true,
    };
  },

  mounted() {
    console.log("mounted");
    this.formObj.rules = this.formRule(this.formObj.formItemArr)
  },
  methods: {
    formRule(formItemArr) {
      formItemArr = formItemArr.flat(Infinity); // 数组扁平化
      const rules = {};
      for (let i = 0; i < formItemArr.length; i++) {
        const item = formItemArr[i];
        if (item.type === "el-button" || !item.required) {
          continue;
        }
        if (item.rules && Array.isArray(item.rules)) {
          rules[item.prop] = item.rules;
        } else {
          rules[item.prop] = [];
        }
        if (
          item.type === "el-date-picker" &&
          item.selectType.indexOf("range") > -1
        ) {
          rules[item.prop].push({
            required: true,
            type: "array",
            len: 2,
            message: "请选择日期范围",
            trigger: "blur,change",
          });
        } else if (
          item.type === "el-radio" ||
          item.type === "el-checkbox" ||
          item.type === "el-switch" ||
          item.type === "el-date-picker" ||
          item.type === "el-select"
        ) {
          rules[item.prop].push({
            required: true,
            message: `请选择${item.label}`,
            trigger: "change",
          });
        } else {
          rules[item.prop].push({
            required: true,
            message: `请输入${item.label}`,
            trigger: "change",
          });
        }
      }
      console.log("rules", rules);
      return rules;
    },

    handleRemove(formItem, file) {
      const photos = this.formObj.data[formItem.prop];
      const fileList = photos.filter((item) => item.url !== file.url);
      this.$set(this.formObj.data, formItem.prop, fileList);
    },
    onChangeFile(formItem, file, fileList) {
      console.log("onChangeFile", file, fileList);
      const data = {
        file: file,
        fileList: fileList,
      };
      this.handleEvent(formItem.event, data);
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleVideoCardPreview(file) {
      this.dialogVideoUrl = file.url;
      this.videoDialogVisible = true;
    },
    // handleDownload(file) {
    //   api.download(file.url.split("=")[1]);
    // },
    handleEvent(event, data) {
      console.log("handleEvent", data);

      this.$emit(event, data);
    },
    disabledShow(val) {
      if (val == true) {
        this.disabledTemp = false;
      } else {
        this.disabledTemp = true;
      }
    },
    submitForm(formName, event) {
      this.$refs[formName].validate((valid) => {
        console.log("formName", event, valid);
        if (valid) {
          this.$emit(event, this.formObj.data);
        } else {
          // console.log('error submit!!')
          this.$message("提交失败，请检查您的所填项！");
          return false;
        }
      });
    },

    resetForm(formName, event) {
      this.$refs[formName].resetFields();
      this.$emit(event, formName);
    },

    changeHideUpload(fileList) {
      this.hideUpload = fileList.length >= 1;
    },
  },
};
</script>

<style scoped lang="css">
.forms {
  padding: 20px;
}

.dialogImageUrl {
  position: fixed;
}

.el-form-item {
  margin-right: 10px;
}

.el-form-item__label-wrap {
  margin-left: 0px !important;
}

.group-cnt {
  width: 120px;
  display: inline-flex;
  align-items: center;
}
.group-cnt i {
  font-size: 24px;
  padding-right: 10px;
}
.mores {
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.mores:hover .icons {
  color: #fff;
}

.icons {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(223, 223, 223);
}

.asd {
  margin: -38px 0px 0px 100px;
}

.bot {
  border-left: 1px solid #eee;
  margin-right: 5px;
  margin-top: 5px;
}

.searbtn {
  margin-left: 15px;
}
</style>
