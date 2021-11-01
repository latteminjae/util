import Ajv from "ajv";

const jsonSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $ref: "#/definitions/Datas",
    definitions: {},
};

export function typeCheckAPIResponseData(data: any): boolean {
    const ajv = new Ajv();
    const validate = ajv.compile(jsonSchema);
    const valid = validate(data);
    
    if (!valid) {
        // console.log(validate.errors);
    }

    return valid;
}

// ajv 라이브러리를 사용하여 미리 만들어둔 jsonSchema를 사용하여
// json schema랑 response의 데이터가 형식에 맞는지 검증
