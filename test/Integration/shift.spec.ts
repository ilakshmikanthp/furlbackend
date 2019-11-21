import ApiGateway = require('moleculer-web');
import setupDatabase from '@Test/Config/SetupDatabase';
import { getConnection, Any } from 'typeorm';
import { BrokerHelper } from '@Test/Utils';

const request = require("supertest");
const broker = BrokerHelper.setupBroker();
let server: any;

beforeEach(async () => {
    await setupDatabase();
});

afterEach(async () => {
    await getConnection().close();
});

beforeAll(() => {
    const service = broker.createService(ApiGateway);
    server = service.server;
    return broker.start();
});

afterAll(() => broker.stop());

describe("Test Shift service requests", () => {
    it("Test POST request on Shift service <methodName> method", () => {

        const params = {
            //params
        }

        return request(server)
            .post("/shift/<methodName>")
            .query({ ...params })
            .then((res: any) => {
                expect(res.statusCode).toBe(200);
                expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
                expect(res.body).toBe({});
            });
    });
});