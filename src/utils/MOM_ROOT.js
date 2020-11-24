const childrenMenu = [
  {
    menuId: 'InsPharmacyManage',
    menuName: '基本信息管理',
    menuPath: '/InstitutionalDirectory/InformationMaintenance/InsAllInfo/InsPharmacyManage',
    menuClass: 'iconsdrzhome',
    childrenMenu: []
  },
  {
    menuId: 'InsHospitalManage',
    menuName: '基本信息管理',
    menuPath: '/InstitutionalDirectory/InformationMaintenance/InsAllInfo/InsHospitalManage',
    menuClass: 'iconsdrzhome',
    childrenMenu: []
  },
  {
    menuId: 'InsCaregiverInforManage',
    menuName: '医务人员信息管理',
    menuPath: '/InstitutionalDirectory/InformationMaintenance/InsAllInfo/InsCaregiverInforManage',
    menuClass: 'iconsdrzhome',
    childrenMenu: []
  },
  {
    menuId: 'Information',
    menuName: '机构页面（信用事件管理）',
    menuPath: '/Information',
    menuClass: 'iconsdrzhome',
    childrenMenu: [
      {
        menuId: 'MedicalMaintain',
        menuName: '信用事件查询',
        menuPath: '/InstitutionalDirectory/CreditEventfile/InsCreditEventMange',
        childrenMenu: []
      }
    ]
  },
  {
    menuId: 'Information',
    menuName: '机构页面（信用事件管理）',
    menuPath: '/Information',
    menuClass: 'iconsdrzhome',
    childrenMenu: [
      {
        menuId: 'MedicalMaintain',
        menuName: '信用事件查询',
        menuPath: '/InstitutionalDirectory/CreditEventfile/InsCreditEventMange',
        childrenMenu: []
      }
    ]
  },
  {
    menuId: 'homePage',
    menuName: '信用数据大屏展示',
    menuPath: '/FullScreenDataShowSmall',
    menuClass: 'iconicon_data',
    childrenMenu: []
  },
  // 机构协议管理
  {
    menuId: 'InsProtocolManage',
    menuName: '协议查询',
    menuClass: 'iconsdrzhome',
    childrenMenu: [
      {
        menuId: 'InsHospitalInfoManagement',
        menuName: '机构协议管理',
        menuPath: '/InstitutionalDirectory/InformationMaintenance/InsProtocolManage/InsHospitalInfoManage',
        childrenMenu: []
      },
      {
        menuId: 'InsHospitalInfoManagement',
        menuName: '医务人员协议管理',
        menuPath: '/InstitutionalDirectory/InformationMaintenance/InsProtocolManage/InsMedicalStaffInfoManage',
        menuClass: 'iconicon_data',
        childrenMenu: []
      }
    ]
  },

  // 机构协议管理
  {
    menuId: 'InsProtocolManage',
    menuName: '协议查询',
    menuClass: 'iconsdrzhome',
    childrenMenu: [
      {
        menuId: 'InsHospitalInfoManagement',
        menuName: '机构协议管理',
        menuPath: '/InstitutionalDirectory/InformationMaintenance/InsProtocolManage/InsPharmacyInfoManage',
        menuClass: 'iconicon_data',
        childrenMenu: []
      },
      {
        menuId: 'InsHospitalInfoManagement',
        menuName: '医务人员协议管理',
        menuPath: '/InstitutionalDirectory/InformationMaintenance/InsProtocolManage/InsMedicalStaffInfoManage',
        menuClass: 'iconicon_data',
        childrenMenu: []
      }
    ]
  },

  {
    menuId: 'SURPERVISION_OBJECT_MANAGEMENT',
    menuName: '监管对象管理',
    menuClass: 'iconicon_object',
    menuPath: '/SupervisionObjectManagement',
    childrenMenu: [
      // {
      //   menuId: 'SUPERVISION_OBJECT_QUERY',
      //   menuName: '监管对象查询',
      //   menuPath: '/SupervisionObjectManagement/SupervisionObjectQuery',
      //   childrenMenu: [
      //     {
      //       menuId: 'MEDICAL_INSTITUTION_QUERY',
      //       menuName: '定点医院查询',
      //       menuPath: '/SupervisionObjectManagement/SupervisionObjectQuery/MedicalInstitutionQuery',
      //       childrenMenu: []
      //     },
      //     {
      //       menuId: 'MEDICAL_INS_DRUGSTORE_QUERY',
      //       menuName: '医保定点药店查询',
      //       menuPath: '/SupervisionObjectManagement/SupervisionObjectQuery/MedicalInsDrugstoreQuery',
      //       childrenMenu: []
      //     },
      //     {
      //       menuId: 'CAREGIVER_INFOR_QUERY',
      //       menuName: '医务人员查询',
      //       menuPath: '/SupervisionObjectManagement/SupervisionObjectQuery/CaregiverInforQuery',
      //       childrenMenu: []
      //     },
      //     {
      //       menuId: 'INSURED_PERSON_QUERY',
      //       menuName: '参保人员查询',
      //       menuPath: '/SupervisionObjectManagement/SupervisionObjectQuery/InsuredPersonQuery',
      //       childrenMenu: []
      //     }
      //   ]
      // },
      {
        menuId: 'archives_Management',
        menuName: '档案信息管理',
        menuPath: '/SupervisionObjectManagement/archivesManagement',
        childrenMenu: [
          // {
          //   menuId: 'NEW_ORGANIZATION_INFO',
          //   menuName: '新建机构信息',
          //   menuPath: '/SupervisionObjManagement/ArchivesInfoManagement/NewOrganizationInfo',
          //   childrenMenu: []
          // },
          {
            menuId: 'MEDICAL_INS_INFO_MANAGE',
            menuName: '定点医院管理',
            menuPath: '/SupervisionObjManagement/ArchivesInfoManagement/MedicalInsInfoManage',
            childrenMenu: []
          },
          {
            menuId: 'MEDICAL_INSURANCE_PHA_INFO_MANAGE',
            menuName: '定点药店管理',
            menuPath: '/SupervisionObjManagement/ArchivesInfoManagement/MedicalInsurancePhaInfoManage',
            childrenMenu: []
          },
          {
            menuId: 'CAREGIVER_INFOR_MANAGE',
            menuName: '医务人员管理',
            menuPath: '/SupervisionObjManagement/ArchivesInfoManagement/CaregiverInforManage',
            childrenMenu: []
          }
          // {
          //   menuId: 'INSURED_PERSON_INFOR_MANAGE',
          //   menuName: '参保人员信息管理',
          //   menuPath: '/SupervisionObjManagement/ArchivesInfoManagement/InsuredPersonInforManage',
          //   childrenMenu: []
          // }
        ]
      },
      {
        menuId: 'INSURANCE_POLICY_MANAGEMENT',
        menuName: '医保协议管理',
        menuPath: '/SupervisionObjManagement/InsurancePolicyManagement',
        childrenMenu: [
          {
            menuId: 'HOS_INFO_MANAGEMENT',
            menuName: '定点医院协议管理',
            menuPath: '/SupervisionObjManagement/InsuPolicyManage/HosInfoManage',
            childrenMenu: []
          },
          {
            menuId: 'PHARMACY_INFO_MANAGEMENT',
            menuName: '定点药店协议管理',
            menuPath: '/SupervisionObjManagement/InsuPolicyManage/PharmInfoManage',
            childrenMenu: []
          },
          // {
          //   menuId: 'TWO_ORGA_POLICY_INFO',
          //   menuName: '两定机构协议信息',
          //   menuPath: '/SupervisionObjManagement/InsuPolicyManage/TwoOrgPolicyInfo',
          //   childrenMenu: []
          // },
          {
            menuId: 'MEDICAL_STAFF_POLICY_MANAGEMENT',
            menuName: '医务人员协议管理',
            menuPath: '/SupervisionObjManagement/InsuPolicyManage/MedStaInfoManage',
            childrenMenu: []
          }
          // {
          //   menuId: 'MEDICAL_STAFF_POLICY_INFO',
          //   menuName: '医务人员协议信息',
          //   menuPath: '/SupervisionObjManagement/InsuPolicyManage/MedStafPolicyInfo',
          //   childrenMenu: []
          // }
        ]
      },
      {
        menuId: 'IN_MNG_MANAGEMENT_EXAM',
        menuName: '红黑名单管理',
        menuPath: '/SupervisionObjManagement/RedBlackManagement',
        childrenMenu: [
          {
            menuId: 'INSTITUTION',
            menuName: '定点医院红黑名单',
            menuPath: '/SupervisionObjManagement/RedBlackManagement/Institution',
            childrenMenu: []
          },
          {
            menuId: 'PHARMACY',
            menuName: '定点药店红黑名单',
            menuPath: '/SupervisionObjManagement/RedBlackManagement/Pharmacy',
            childrenMenu: []
          },
          {
            menuId: 'PERSONNEL',
            menuName: '医务人员红黑名单',
            menuPath: '/SupervisionObjManagement/RedBlackManagement/Personnel',
            childrenMenu: []
          }
        ]
      },

      {
        menuId: 'IN_MNG_MANAGEMENT_EXAM',
        menuName: '红黑名单管理',
        menuPath: '/SupervisionObjManagement/RedBlackManagementIns',
        childrenMenu: [
          {
            menuId: 'INSTITUTION',
            menuName: '定点医院红黑名单',
            menuPath: '/SupervisionObjManagement/RedBlackManagementIns/Institution',
            childrenMenu: []
          },
          {
            menuId: 'PHARMACY',
            menuName: '定点药店红黑名单',
            menuPath: '/SupervisionObjManagement/RedBlackManagementIns/Pharmacy',
            childrenMenu: []
          },
          {
            menuId: 'PERSONNEL',
            menuName: '医务人员红黑名单',
            menuPath: '/SupervisionObjManagement/RedBlackManagementIns/Personnel',
            childrenMenu: []
          }
        ]
      }
    ]

  },
  {
    menuId: 'CREDIT_EVENT_MANAGEMENT',
    menuName: '信用事件管理',
    menuPath: '/CreditEventManagement',
    menuClass: 'iconicon_Event',
    childrenMenu: [
      {
        menuId: 'CREDIT_INDEX_LIBRARY',
        menuName: '信用事件管理',
        menuPath: '/CreditEventManagement/CreditEventfile/CreditEventIndex',
        childrenMenu: []
      }
    ]
  },
  {
    menuId: 'CREDIT_INDEX_LIBRARY',
    menuName: '信用指标管理',
    menuPath: '/CreditEventManagement/CreditIndexManagement',
    menuClass: 'iconicon_index',
    childrenMenu: [
      {
        menuId: 'INDEX_LIBRARY',
        menuName: '指标项目管理',
        menuPath: '/CreditEventManagement/CreditIndexManagement/IndexLibrary'
      },
      {
        menuId: 'INDEX_STRUCTURE',
        menuName: '权重计算管理',
        menuPath: '/CreditEventManagement/StructureJudgement/index'
      }
      // {
      //   menuId: 'INDEX_LIBRARY_DETAIL',
      //   menuName: '指标详情',
      //   menuPath: '/CreditEventManagement/CreditIndexManagement/IndexLibraryDeatil'
      // }
    ]
  },
  {
    menuId: 'IN_HOME',
    menuName: '信用评价管理',
    menuPath: '/homePagea',
    menuClass: 'iconicon_evaluate',
    childrenMenu: [
      {
        menuId: 'indexProgramme',
        menuName: '评价方案管理',
        menuPath: '/CreditEvaluationManagement/ProjectManagement/indexProgramme',
        childrenMenu: [

        ]
      },
      {
        menuId: 'EvaluationIndex',
        menuName: '信用评价管理',
        menuPath: '/CreditEvaluationManagement/EvaluationManagement/EvaluationIndex',
        childrenMenu: []
      }
    ]
  },
  {
    menuId: 'IN_HOME',
    menuName: '信用报告管理',
    menuPath: '/CreditProjectManagement',
    menuClass: 'iconicon_Presentation',
    childrenMenu: [
      {
        menuId: 'MedicalMaintain',
        menuName: '机构信用报告查询',
        menuPath: '/CreditProjectManagement/ProjectQuery',
        childrenMenu: []
      }
    ]
  },
  // {
  //   menuId: 'InformationMaintenance',
  //   menuName: '信息维护',
  //   menuPath: '/InformationMaintenance',
  //   menuClass: 'iconsdrzhome',
  //   childrenMenu: [
  //     {
  //       menuId: 'MedicalMaintain',
  //       menuName: '定点医院信息维护',
  //       menuPath: '/InstitutionalDirectory/InformationMaintenance/MedicalMaintain',
  //       childrenMenu: []
  //     }
  //   ]
  // },
  {
    menuId: 'IN_ACCOUNTMANAGE3',
    menuName: '系统管理',
    menuPath: '/apply/applydemo',
    menuClass: 'iconicon_system',
    childrenMenu: [
      {
        menuId: 'AccountManage',
        menuName: '机构账户管理',
        menuPath: '/SupervisionObjectManagement/SystemSetup/AccountManage',
        childrenMenu: []
      }, {
        menuId: 'ChangePassword',
        menuName: '修改密码',
        menuPath: '/SupervisionObjectManagement/SystemSetup/ChangePassword',
        childrenMenu: []
      }
    ]
  }
]
export default childrenMenu
