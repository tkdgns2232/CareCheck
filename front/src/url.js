const api = {
  openapi: "3.0.1",
  info: {
    title: "carecheck",
    description: "api 문서",
    contact: {
      name: "3조",
      email: "tkdgns2232@naver.com",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "Generated server url",
    },
  ],
  security: [
    {
      "Bearer Authentication": [],
    },
  ],
  paths: {
    "/user/changeInfo/phoneNumber": {
      put: {
        tags: ["user-controller"],
        operationId: "changePhoneNumber",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/user/changeInfo/password": {
      put: {
        tags: ["user-controller"],
        operationId: "changePassword",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/user/changeInfo/email": {
      put: {
        tags: ["user-controller"],
        operationId: "changeEmail",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ReqChangeEmailDto",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/notice/modify/{noticeId}": {
      put: {
        tags: ["notice-controller"],
        summary: "공지사항 수정",
        description: "공지사항 수정",
        operationId: "modifyNotice",
        parameters: [
          {
            name: "noticeId",
            in: "path",
            required: true,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int32",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ReqModifyNoticeDto",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/user/auth/signup": {
      post: {
        tags: ["user-controller"],
        summary: "회원가입(사번등록)",
        description: "사번등록",
        operationId: "signup",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ReqSignupDto",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/user/auth/signin": {
      post: {
        tags: ["user-controller"],
        summary: "로그인",
        description: "로그인",
        operationId: "signin",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ReqSigninDto",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/patient/registration": {
      post: {
        tags: ["patient-controller"],
        summary: "환자등록추가",
        description: "환자등록",
        operationId: "registerPatient",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ReqPatientRegDto",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/order/score": {
      post: {
        tags: ["order-controller"],
        summary: "점수단가 변경",
        description: "점수단가 변경",
        operationId: "updateScorePay",
        parameters: [
          {
            name: "scorePay",
            in: "query",
            required: true,
            schema: {
              type: "number",
              format: "double",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/order/enroll": {
      post: {
        tags: ["order-controller"],
        summary: "오더등록",
        description: "오더등록",
        operationId: "orderEnroll",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ReqAddOrderDto",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/notice/write": {
      post: {
        tags: ["notice-controller"],
        summary: "공지사항 작성",
        description: "공지사항 작성",
        operationId: "createNotice",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ReqWriteNoticeDto",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/chart/registration": {
      post: {
        tags: ["chart-controller"],
        summary: "진료대기자명단",
        description: "환자 차트번호로 되어 있는 대기자 명단",
        operationId: "registerChart",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ReqAddChartDto",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/adm/vitalInfo": {
      post: {
        tags: ["admission-controller"],
        summary: "환자바이탈정보",
        description: "선택환자의 바이탈 정보",
        operationId: "selectVitalInfo",
        parameters: [
          {
            name: "admId",
            in: "query",
            required: true,
            schema: {
              type: "integer",
              format: "int32",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/adm/insert": {
      post: {
        tags: ["admission-controller"],
        summary: "진료접수",
        description: "접수등록",
        operationId: "insertAdm",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ReqAddAdmissionDto",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/adm/insertOrder": {
      post: {
        tags: ["admission-controller"],
        summary: "오더입력",
        description: "선택한 접수번호에 처방입력",
        operationId: "insertOrderInAdm",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ReqAddOrderInAdmDto",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/adm/insertDiagnosis": {
      post: {
        tags: ["admission-controller"],
        summary: "진단입력",
        description: "선택한 접수번호에 주진단입력",
        operationId: "insertDiagnosisInAdm",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ReqAddDiagnosisInAdmDto",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/user/me": {
      get: {
        tags: ["user-controller"],
        operationId: "getLoginUser",
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/order/list": {
      get: {
        tags: ["order-controller"],
        summary: "오더검색",
        description: "오더명검색",
        operationId: "searchOrder",
        parameters: [
          {
            name: "reqSearchOrderDto",
            in: "query",
            required: true,
            schema: {
              $ref: "#/components/schemas/ReqSearchOrderDto",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/notice/list": {
      get: {
        tags: ["notice-controller"],
        summary: "공지사항 전체 조회",
        description: "공지사항 전체 조회",
        operationId: "searchNoticeList",
        parameters: [
          {
            name: "dto",
            in: "query",
            required: true,
            schema: {
              $ref: "#/components/schemas/ReqNoticeListSearchDto",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/chart": {
      get: {
        tags: ["chart-controller"],
        summary: "환자 번호 조회",
        description: "환자 번호 조회",
        operationId: "searchPatient",
        parameters: [
          {
            name: "reqSearchChartDto",
            in: "query",
            required: true,
            schema: {
              $ref: "#/components/schemas/ReqSearchChartDto",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/adm/{admId}/detailBill": {
      get: {
        tags: ["admission-controller"],
        summary: "진료세부내역",
        description: "선택한접수번호의 세부내역",
        operationId: "selectDetailBill",
        parameters: [
          {
            name: "admId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int32",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/adm/waitingList": {
      get: {
        tags: ["admission-controller"],
        summary: "진료대기자명단",
        description: "직원코드로 등록된 대기자명단",
        operationId: "selectWaitingList",
        parameters: [
          {
            name: "usercode",
            in: "query",
            description: "직원코드",
            required: true,
            schema: {
              type: "string",
            },
            example: 2025020003,
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/notice/{noticeId}": {
      delete: {
        tags: ["notice-controller"],
        summary: "공지사항 삭제",
        description: "공지사항 삭제",
        operationId: "deleteNotice",
        parameters: [
          {
            name: "noticeId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int32",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "*/*": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      ReqChangeEmailDto: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "이메일 변경",
          },
        },
      },
      ReqModifyNoticeDto: {
        required: ["content", "title"],
        type: "object",
        properties: {
          title: {
            type: "string",
          },
          content: {
            type: "string",
          },
        },
        description: "공지 수정",
      },
      ReqSignupDto: {
        required: ["email", "password", "phoneNumber", "roleId", "username"],
        type: "object",
        properties: {
          username: {
            type: "string",
            description: "성명",
            example: "홍길동",
          },
          password: {
            type: "string",
            description: "비밀번호",
            example: "qwer1234!",
          },
          email: {
            type: "string",
            description: "이메일",
            example: "test@gmail.com",
          },
          phoneNumber: {
            type: "string",
            description: "휴대폰 번호",
            example: "010-1234-5678",
          },
          roleId: {
            type: "integer",
            description: "권한 ID",
            format: "int32",
            example: 1,
          },
        },
      },
      ReqSigninDto: {
        required: ["password", "usercode"],
        type: "object",
        properties: {
          usercode: {
            type: "string",
            description: "사원번호",
            example: "2025010001",
          },
          password: {
            type: "string",
            description: "비밀번호",
            example: "qwer1234!",
          },
        },
      },
      ReqPatientRegDto: {
        required: ["patientName", "regidentNum"],
        type: "object",
        properties: {
          patientName: {
            type: "string",
            description: "환자 이름",
            example: "이순신",
          },
          regidentNum: {
            type: "string",
            description: "주민등록번호",
            example: "111111-2222222",
          },
          phoneNumber: {
            type: "string",
            description: "휴대폰번호",
            example: "010-1234-5678",
          },
        },
      },
      ReqAddOrderDto: {
        type: "object",
        properties: {
          orderCode: {
            type: "string",
            description: "오더코드",
          },
          orderName: {
            type: "string",
            description: "오더명",
          },
          orderScore: {
            type: "number",
            description: "상대가치점수",
            format: "double",
          },
        },
        description: "오더 등록",
      },
      ReqWriteNoticeDto: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "제목",
          },
          content: {
            type: "string",
            description: "내용",
          },
        },
        description: "공지사항 작성",
      },
      ReqAddChartDto: {
        required: ["admId"],
        type: "object",
        properties: {
          admId: {
            type: "integer",
            description: "admin ID",
            format: "int32",
            example: 1,
          },
          content: {
            type: "string",
            description: "환자명",
          },
        },
        description: "차트 등록",
      },
      ReqAddAdmissionDto: {
        required: ["clinicDeft", "patientId", "userCode"],
        type: "object",
        properties: {
          patientId: {
            type: "string",
            description: "환자차트번호",
            example: "1",
          },
          userCode: {
            type: "string",
            description: "의사사번",
            example: "2025020004",
          },
          clinicDeft: {
            type: "string",
            description: "진료과",
            example: "소아과",
          },
        },
      },
      ReqAddOrderInAdmDto: {
        required: [
          "admId",
          "orderCode",
          "orderCount",
          "orderDays",
          "orderDose",
        ],
        type: "object",
        properties: {
          admId: {
            type: "integer",
            description: "접수번호",
            format: "int32",
            example: 1,
          },
          orderCode: {
            type: "string",
            description: "오더코드",
            example: "AA156",
          },
          orderDose: {
            type: "number",
            description: "용량ml, mg",
            format: "double",
            example: 1.56,
          },
          orderCount: {
            type: "integer",
            description: "횟수",
            format: "int32",
            example: 3,
          },
          orderDays: {
            type: "integer",
            description: "일수",
            format: "int32",
            example: 3,
          },
          orderMethod: {
            type: "string",
            description: "방법",
            example: "하루 3일치 먹으세요",
          },
        },
      },
      ReqAddDiagnosisInAdmDto: {
        required: ["admId", "diseaseCode"],
        type: "object",
        properties: {
          admId: {
            type: "integer",
            description: "접수번호",
            format: "int32",
            example: 1,
          },
          diseaseCode: {
            type: "string",
            description: "상병코드",
            example: "j00",
          },
        },
      },
      ReqSearchOrderDto: {
        type: "object",
        properties: {
          keyword: {
            type: "string",
            description: "오더명",
          },
        },
        description: "오더 검색 DTO",
      },
      ReqNoticeListSearchDto: {
        type: "object",
        properties: {
          page: {
            type: "integer",
            format: "int32",
          },
          limitCount: {
            type: "integer",
            format: "int32",
          },
          order: {
            type: "string",
          },
          searchText: {
            type: "string",
          },
        },
      },
      ReqSearchChartDto: {
        type: "object",
        properties: {
          patientId: {
            type: "integer",
            description: "환자 차트 번호",
            format: "int32",
          },
        },
        description: "환자 검색 DTO",
      },
    },
    securitySchemes: {
      "Bearer Authentication": {
        type: "http",
        name: "Bearer Authentication",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

const paths = Object.keys(api.paths);
const methods = paths.map((url) => Object.keys(api.paths[url]));
for (let i = 0; i < paths.length; i++) {
  console.log(`url: ${paths[i]}, method: ${methods[i]}`);
}

/**
 * 
 * 
 *  
    ========> AccountController <========
    url: /account/users/{usercode}, method: put
    {
        usercode: 11111,
        phoneNumber: "010-1234-1234",
        email: "test@gmail.com",
    }    
    url: /account/users/{usercode}/password, method: put
    url: /account/users/me, method: get

    ========> UserController <========
    url: /admin/users, method: post
    url: /admin/users, method: get 
    url: /admin/users/{usercode}, method: put
    url: /admin/users/{usercode}, method: delete   선택

    ========> SystemSettingController <========
    병원 정보
    직급, 권한
    요율
    접근 가능한 메뉴 권한
    url: /orders/score, method: post

    ========> AuthController <========
    url: /auth/signin, method: post

    ========> PatientController <========
    url: /patients, method: post

    ========> AdmissionController <========
    url: /admissions, method: post
    url: /admissions/{admissionId}/vitals, method: post
    url: /admissions/{admissionId}/orders, method: post
    url: /admissions/{admissionId}/diagnosis, method: post
    url: /admissions/{admissionId}/billings, method: get
    url: /admissions/waitings, method: get, params: {
        usercode: "",
        comleteStatus: 완료, 대기, 전체
        startDate: "",
        endDate: "",
    }

    ========> NoticeController <======== 
    url: /notices, method: post
    url: /notices, method: get
    url: /notices/{noticeId}, method: get
    url: /notices/{noticeId}, method: put
    url: /notices/{noticeId}, method: delete

    ========> OrderController <========
    url: /orders, method: post
    url: /orders, method: get

    ========> ChartController <======== 후순위
    url: /charts, method: post
    url: /charts, method: get
    url: /charts/{chartId}, method: get


 * 
    url: /user/changeInfo/phoneNumber, method: put
    url: /user/changeInfo/password, method: put
    url: /user/changeInfo/email, method: put
    url: /notice/modify/{noticeId}, method: put
    url: /user/auth/signup, method: post
    url: /user/auth/signin, method: post
    url: /patient/registration, method: post
    url: /order/score, method: post
    url: /order/enroll, method: post
    url: /notice/write, method: post
    url: /chart/registration, method: post
    url: /adm/vitalInfo, method: post
    url: /adm/insert, method: post
    url: /adm/insertOrder, method: post
    url: /adm/insertDiagnosis, method: post
    url: /user/me, method: get
    url: /order/list, method: get
    url: /notice/list, method: get
    url: /chart, method: get
    url: /adm/{admId}/detailBill, method: get
    url: /adm/waitingList, method: get
    url: /notice/{noticeId}, method: delete
 * 
 * 
 */
