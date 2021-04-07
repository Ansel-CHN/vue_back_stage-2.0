/*
 * @Author: your name
 * @Date: 2021-04-06 10:17:15
 * @LastEditTime: 2021-04-06 23:54:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_back_stage\src\plugins\element.js
 */
import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Row, Col } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.prototype.$message = Message
