"use strict";
/**
 * send-email controller
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const nodemailer_1 = __importDefault(require("nodemailer"));
const emailController = strapi_1.factories.createCoreController('api::send-email.send-email');
// 定义发送邮件的功能
exports.default = {
    async find(ctx) {
        return ctx.send({ message: 'GET /email endpoint' });
    },
    async update(ctx) {
        return ctx.send({ message: 'PUT /email endpoint' });
    },
    async delete(ctx) {
        return ctx.send({ message: 'DELETE /email endpoint' });
    },
    async create(ctx) {
        const { name, recipient, tel, job, message } = ctx.request.body;
        // 创建邮件传输对象
        const transporter = nodemailer_1.default.createTransport({
            // service: 'smtp.163.com',
            host: 'smtp.163.com',
            port: 465,
            secure: true,
            auth: {
                user: 't1638253900@163.com',
                pass: 'YKgH2uMXHtFT44Q5', // 替密码
            },
        });
        const mailOptions = {
            from: 't1638253900@163.com',
            to: 't1638253900@163.com',
            subject: "来访人员信息",
            text: `姓名:${name},邮箱:${recipient},电话:${tel},职位:${job},更多:${message}`
        };
        try {
            await transporter.sendMail(mailOptions);
            return ctx.send({ message: '邮件发送成功' });
        }
        catch (error) {
            console.error(error); // 打印错误信息
            return ctx.send({ error: '邮件发送失败' });
        }
    },
    async findOne(ctx) {
        return ctx.send({ message: 'GET /email endpoint' });
    },
};
