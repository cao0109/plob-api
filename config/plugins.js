module.exports = ({ env }) => ({
    upload: {
        // Update your cloudinary credentials here
        config: {
            provider: "cloudinary",
            providerOptions: {
                cloud_name: ".......",
                api_key: "..............",
                api_secret: ".................",
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
    // ...
    "strapi-plugin-populate-deep": {
        config: {
            defaultDepth: 3,
        },
    },
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                // QQ邮箱服务器和默认端口
                host: env('SMTP_HOST', 'smtp.163.com'),
                port: env('SMTP_PORT', 465),
                auth: {
                    // 发送账号和客户端鉴权码
                    user: env('SMTP_USERNAME', 't1638253900@163.com'),
                    pass: env('SMTP_PASSWORD', 'YKgH2uMXHtFT44Q5'),
                },
                // ... any custom nodemailer options
            },
            settings: {
                // 默认发送账号
                defaultFrom: 't1638253900@163.com',
                // 默认回复账号
                defaultReplyTo: 't1638253900@163.com',
            },
        },
    },
});
