---
title: OA相关
authors: [biuaxia]
sidebar_position: 202312010907
---

## 二次入职流程说明

1. 如果身份证对应的账号在员工表存在，并且该数据的员工状态为离职就是二次入职；
2. 导入时有一个是否曾经入职过XX公司的选项，如果是会被认为是二次入职。

## 状态值一览

### 招聘管理

#### 社招管理

##### 社招人才管理

###### 二次入职 secondEmpList

- zhkj_zzoa_zp_talentpool_resume, 校招社招简历人才库
  - classification = 1, 简历类型(0校招，1社招，2劳务公司) 
  - is_deleted = 0, 是否删除, 0否1是
  - two_emp = 1, 是否二次入职, 0否1是

##### 简历处理

###### 待处理 untreatedInterview

- zhkj_zzoa_zp_talentpool_resume, 校招社招简历人才库
  - classification = 1, 简历类型(0校招，1社招，2劳务公司)
  - stage = 1, 阶段(0:新简历 1:面试 2:拟录用 3:入职 4:黑名单 5:待分配)
  - resume_status in (0, 200), 简历状态(0未处理 1:已处理)
  - is_deleted = 0, 是否删除, 0否1是

###### 已处理 szInterview

- zhkj_zzoa_zp_interview_evaluation, 面试评价
  - recruitment_type = 1, 招聘类型（0:校招 1:社招）
  - is_retest = 1, 是否复试 0是  1否
- zhkj_zzoa_zp_talentpool_resume, 校招社招简历人才库
  - stage in (1,6,2,3,7), 阶段(0:新简历 1:面试 2:拟录用 3:入职 4:黑名单 5:待分配)
  - eliminate_blacklist in (0,1,3,4), 淘汰或者黑名单(0:正常 1:淘汰 2:黑名单 3:通过 4:转岗)
  - is_deleted = 0, 是否删除, 0否1是

##### 待入职申请管理

###### 待申请 waitEntryPage

- zhkj_zzoa_yg_entry_management, 入职管理表
  - is_deleted = 0, 是否删除, 0否1是
  - classification IS NOT NULL, 简历类型 0校招  1社招

#### 体检管理

##### 体检处理

###### 待处理 OccupationPeopleController#page

- zhkj_zzoa_tj_occupation_people, 职业体检人员信息
  - is_deleted = 0, 是否删除, 0否1是
  - tj_result = 0, 是否上传 0未上传  1已上传
  - tj_sure = 0, 是否安排体检0待处理 1待安排 2已安排 3已取消

###### 已处理 OccupationPeopleController#pageAlready

- zhkj_zzoa_tj_occupation_people, 职业体检人员信息
  - tj_sure `<>` 0, 不等于0, 是否安排体检0待处理 1待安排 2已安排 3已取消

##### 体检安排

###### 待安排 OccupationPeopleController#page

- zhkj_zzoa_tj_occupation_people, 职业体检人员信息
  - is_deleted = 0, 是否删除, 0否1是
  - tj_result = 0, 是否上传 0未上传  1已上传
  - tj_sure = 1, 是否安排体检0待处理 1待安排 2已安排 3已取消

###### 已安排 ArrangePage

- zhkj_zzoa_tj_occupation_people, 职业体检人员信息
  - pass is null, 是否通过0合格 1不合格 2复证 合格则待取证
  - type_status in (0, 1), 0人才库 1员工档案
  - tj_sure = 2, 是否安排体检0待处理 1待安排 2已安排 3已取消

##### 合格 OccupationPeopleController#pageStatus

- zhkj_zzoa_tj_occupation_people, 职业体检人员信息
  - pass = 0, 0合格1不合格2复检

##### 复检 OccupationPeopleController#pageStatus

- zhkj_zzoa_tj_occupation_people, 职业体检人员信息
  - pass = 2, 0合格1不合格2复检

##### 不合格 OccupationPeopleController#pageStatus

- zhkj_zzoa_tj_occupation_people, 职业体检人员信息
  - pass = 1, 0合格1不合格2复检
