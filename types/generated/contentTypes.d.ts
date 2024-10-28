import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBannerdefaulthomepageBannerdefaulthomepage
  extends Schema.SingleType {
  collectionName: 'bannerdefaulthomepages';
  info: {
    singularName: 'bannerdefaulthomepage';
    pluralName: 'bannerdefaulthomepages';
    displayName: 'BannerDefaultHomePage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    favicon: Attribute.Media & Attribute.Required;
    subTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'# Plob Best Startup Company.'>;
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'We Are Here, To Help Your Startup Business'>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio at ut tincidunt porttitor molestie aliquet quam cursus. Rhoncus donec libero et volutpat erat posuere sagittis cursus posuere'>;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Read More'>;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/about-one'>;
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bannerdefaulthomepage.bannerdefaulthomepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bannerdefaulthomepage.bannerdefaulthomepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBestplanBestplan extends Schema.SingleType {
  collectionName: 'bestplans';
  info: {
    singularName: 'bestplan';
    pluralName: 'bestplans';
    displayName: 'BestPlan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Choose Your Best Plans'>;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Pay by monthly or yearly, you can cancel it anytime whatever you want'>;
    plansTab: Attribute.Component<'plans-tabs.plans-tab', true> &
      Attribute.Required;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'See All Pricing Plan'>;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/pricing'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bestplan.bestplan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bestplan.bestplan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blogs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    tag: Attribute.String & Attribute.Required;
    btnText: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::blog.blog', 'title'> & Attribute.Required;
    author: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Admin'>;
    richText: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBlogpostBlogpost extends Schema.SingleType {
  collectionName: 'blogposts';
  info: {
    singularName: 'blogpost';
    pluralName: 'blogposts';
    displayName: 'BlogPost';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Popular Blog Post'>;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'We are try to Update with Latest Article and Blog Post Best Strategic Planning'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blogpost.blogpost',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blogpost.blogpost',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCasestudyCasestudy extends Schema.CollectionType {
  collectionName: 'casestudies';
  info: {
    singularName: 'casestudy';
    pluralName: 'casestudies';
    displayName: 'CaseStudys';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::casestudy.casestudy', 'title'> &
      Attribute.Required;
    richText: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::casestudy.casestudy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::casestudy.casestudy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactContact extends Schema.SingleType {
  collectionName: 'contacts';
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: 'contact';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\uFF080411\uFF09990-2384'>;
    email: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'he.tong@hicity.world'>;
    address: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u8FBD\u5B81\u7701\u5927\u8FDE\u9AD8\u65B0\u56ED\u533A\u4E09\u4E30\u5927\u53A6B\u5EA72006'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCorporateCultureCorporateCulture extends Schema.SingleType {
  collectionName: 'corporate_cultures';
  info: {
    singularName: 'corporate-culture';
    pluralName: 'corporate-cultures';
    displayName: 'corporate culture';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    corporateCulture: Attribute.Component<
      'feature-items.corporate-culture',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::corporate-culture.corporate-culture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::corporate-culture.corporate-culture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.SingleType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'Faq';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Frequently Asked Questions'>;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Which peoples loves us a lot, please check out what about says about us'>;
    image: Attribute.Media & Attribute.Required;
    accordionItem: Attribute.Component<'accordion-items.accordion-item', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFaq2Faq2 extends Schema.SingleType {
  collectionName: 'faq2s';
  info: {
    singularName: 'faq2';
    pluralName: 'faq2s';
    displayName: 'faq2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    shortDesc: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    accordionItem: Attribute.Component<'accordion-items.accordion-item', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq2.faq2', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq2.faq2', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo: Attribute.Media & Attribute.Required;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Best solution for your it startup business consecteturadipiscing elit. Scelerisque amet odio velit auctor. nam elit nulla.'>;
    phone: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'3128959800'>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.DefaultTo<'hello.me@plob.com'>;
    address: Attribute.String &
      Attribute.DefaultTo<'121 St, Melbourne VIC 3000, Australia'>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Quick Link'>;
    quickLinks: Attribute.Component<'footer-links.footer-link', true> &
      Attribute.Required;
    titleTwo: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'About Us'>;
    aboutLinks: Attribute.Component<'footer-links.footer-link', true> &
      Attribute.Required;
    titleThree: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Services'>;
    servicesLinks: Attribute.Component<'footer-links.footer-link', true> &
      Attribute.Required;
    titleFour: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blog'>;
    blogLinks: Attribute.Component<'footer-links.footer-link', true> &
      Attribute.Required;
    description: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Best solution for your it startup business consectetur adipiscing elit.'>;
    socialLinks: Attribute.Component<'social-links.social-link', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFunfactFunfact extends Schema.SingleType {
  collectionName: 'funfacts';
  info: {
    singularName: 'funfact';
    pluralName: 'funfacts';
    displayName: 'Funfact';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    funfactItems: Attribute.Component<'funfacts-items.funfacts-item', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::funfact.funfact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::funfact.funfact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGalleryGallery extends Schema.SingleType {
  collectionName: 'galleries';
  info: {
    singularName: 'gallery';
    pluralName: 'galleries';
    displayName: 'Gallery';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    galleryItem: Attribute.Component<'gallery-items.gallery-item', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gallery.gallery',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gallery.gallery',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurclientOurclient extends Schema.SingleType {
  collectionName: 'ourclients';
  info: {
    singularName: 'ourclient';
    pluralName: 'ourclients';
    displayName: 'OurClient';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Our Respected Clients'>;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Which peoples loves us a lot, please check out what about says about us'>;
    clientsItem: Attribute.Component<'clients-items.clients-item', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ourclient.ourclient',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ourclient.ourclient',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurfeatureOurfeature extends Schema.SingleType {
  collectionName: 'ourfeatures';
  info: {
    singularName: 'ourfeature';
    pluralName: 'ourfeatures';
    displayName: 'OurFeature';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    featuresItems: Attribute.Component<'feature-items.feature-item', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ourfeature.ourfeature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ourfeature.ourfeature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurserviceOurservice extends Schema.SingleType {
  collectionName: 'ourservices';
  info: {
    singularName: 'ourservice';
    pluralName: 'ourservices';
    displayName: 'OurServices';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Services We Offer'>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit auctor nam elit nulla eget sodales dui pulvina'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ourservice.ourservice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ourservice.ourservice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurteamOurteam extends Schema.SingleType {
  collectionName: 'ourteams';
  info: {
    singularName: 'ourteam';
    pluralName: 'ourteams';
    displayName: 'OurTeam';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Meet With Our Consultants'>;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Which peoples loves us a lot, please check out what about says about us'>;
    teamItem: Attribute.Component<'team-items.team-item', true> &
      Attribute.Required;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'See Team Member'>;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/team-member'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ourteam.ourteam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ourteam.ourteam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOverviewOverview extends Schema.SingleType {
  collectionName: 'overviews';
  info: {
    singularName: 'overview';
    pluralName: 'overviews';
    displayName: 'Overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<"Let's Make Something Amazing Together">;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Get Started'>;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/contact'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::overview.overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::overview.overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPartnerlogoPartnerlogo extends Schema.SingleType {
  collectionName: 'partnerlogos';
  info: {
    singularName: 'partnerlogo';
    pluralName: 'partnerlogos';
    displayName: 'PartnerLogo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    partnerItems: Attribute.Component<'partner-items.partner-item', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partnerlogo.partnerlogo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::partnerlogo.partnerlogo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacypolicyPrivacypolicy extends Schema.SingleType {
  collectionName: 'privacypolicies';
  info: {
    singularName: 'privacypolicy';
    pluralName: 'privacypolicies';
    displayName: 'PrivacyPolicy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    richText: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacypolicy.privacypolicy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::privacypolicy.privacypolicy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProcessProcess extends Schema.SingleType {
  collectionName: 'processes';
  info: {
    singularName: 'process';
    pluralName: 'processes';
    displayName: 'Process';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    processItem: Attribute.Component<'process-items.process-item', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::process.process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::process.process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProfessionalexperienceProfessionalexperience
  extends Schema.SingleType {
  collectionName: 'professionalexperiences';
  info: {
    singularName: 'professionalexperience';
    pluralName: 'professionalexperiences';
    displayName: 'ProfessionalExperiences';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    favicon: Attribute.Media & Attribute.Required;
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Over 12 Year Professional Experiences'>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit auctor. nam elit nulla eget sodales dui pulvinar. Best Strategic planning dolor sit sectetur morethe  Scelerisque amet odio velit eu auctor. Aliquet nam elit.'>;
    experiencesInner: Attribute.Component<
      'experiences-inners.experiences-inner',
      true
    > &
      Attribute.Required;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Read More'>;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/about-one'>;
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::professionalexperience.professionalexperience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::professionalexperience.professionalexperience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRecentcaseRecentcase extends Schema.SingleType {
  collectionName: 'recentcases';
  info: {
    singularName: 'recentcase';
    pluralName: 'recentcases';
    displayName: 'RecentCase';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Our Realizations / Recent Cases'>;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit auctor nam elit nulla eget sodales dui pulvina'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::recentcase.recentcase',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::recentcase.recentcase',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSendEmailSendEmail extends Schema.CollectionType {
  collectionName: 'send_emails';
  info: {
    singularName: 'send-email';
    pluralName: 'send-emails';
    displayName: 'SendEmail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    tel: Attribute.String & Attribute.Required;
    position: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    tell: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::send-email.send-email',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::send-email.send-email',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    singularName: 'service';
    pluralName: 'services';
    displayName: 'Services';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    className: Attribute.String;
    icon: Attribute.String & Attribute.Required;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Branding just like your personal identity makes you uniquely you your brand identity is the special sauce of your business that sets you apart from every other Tom Dick and Harry Inc.'>;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Read More'>;
    slug: Attribute.UID<'api::service.service', 'title'> & Attribute.Required;
    richText: Attribute.RichText & Attribute.Required;
    overviewImage: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServicescontactinfoServicescontactinfo
  extends Schema.SingleType {
  collectionName: 'servicescontactinfos';
  info: {
    singularName: 'servicescontactinfo';
    pluralName: 'servicescontactinfos';
    displayName: 'ServicesContactInfo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u521B\u9020\u4E0D\u53EF\u80FD'>;
    phone: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'3128959800'>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.DefaultTo<'hello.me@plob.com'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::servicescontactinfo.servicescontactinfo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::servicescontactinfo.servicescontactinfo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSitelogoSitelogo extends Schema.SingleType {
  collectionName: 'sitelogos';
  info: {
    singularName: 'sitelogo';
    pluralName: 'sitelogos';
    displayName: 'SiteLogo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sitelogo.sitelogo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sitelogo.sitelogo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTechsupportTechsupport extends Schema.SingleType {
  collectionName: 'techsupports';
  info: {
    singularName: 'techsupport';
    pluralName: 'techsupports';
    displayName: 'TechSupport';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    favicon: Attribute.Media & Attribute.Required;
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lightning-Fast Tech Support, Guaranteed'>;
    designation: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'CEO at Flod Agency'>;
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Regan Rosen'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'As a midsize software development company, we combine the best of both worlds. We have the focus and speed of the small IT outsourcing companies along with the scalability and expertise of the big ones.'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::techsupport.techsupport',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::techsupport.techsupport',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTermsofserviceTermsofservice extends Schema.SingleType {
  collectionName: 'termsofservices';
  info: {
    singularName: 'termsofservice';
    pluralName: 'termsofservices';
    displayName: 'TermsOfService';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    richText: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::termsofservice.termsofservice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::termsofservice.termsofservice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::bannerdefaulthomepage.bannerdefaulthomepage': ApiBannerdefaulthomepageBannerdefaulthomepage;
      'api::bestplan.bestplan': ApiBestplanBestplan;
      'api::blog.blog': ApiBlogBlog;
      'api::blogpost.blogpost': ApiBlogpostBlogpost;
      'api::casestudy.casestudy': ApiCasestudyCasestudy;
      'api::contact.contact': ApiContactContact;
      'api::corporate-culture.corporate-culture': ApiCorporateCultureCorporateCulture;
      'api::faq.faq': ApiFaqFaq;
      'api::faq2.faq2': ApiFaq2Faq2;
      'api::footer.footer': ApiFooterFooter;
      'api::funfact.funfact': ApiFunfactFunfact;
      'api::gallery.gallery': ApiGalleryGallery;
      'api::ourclient.ourclient': ApiOurclientOurclient;
      'api::ourfeature.ourfeature': ApiOurfeatureOurfeature;
      'api::ourservice.ourservice': ApiOurserviceOurservice;
      'api::ourteam.ourteam': ApiOurteamOurteam;
      'api::overview.overview': ApiOverviewOverview;
      'api::partnerlogo.partnerlogo': ApiPartnerlogoPartnerlogo;
      'api::privacypolicy.privacypolicy': ApiPrivacypolicyPrivacypolicy;
      'api::process.process': ApiProcessProcess;
      'api::professionalexperience.professionalexperience': ApiProfessionalexperienceProfessionalexperience;
      'api::recentcase.recentcase': ApiRecentcaseRecentcase;
      'api::send-email.send-email': ApiSendEmailSendEmail;
      'api::service.service': ApiServiceService;
      'api::servicescontactinfo.servicescontactinfo': ApiServicescontactinfoServicescontactinfo;
      'api::sitelogo.sitelogo': ApiSitelogoSitelogo;
      'api::techsupport.techsupport': ApiTechsupportTechsupport;
      'api::termsofservice.termsofservice': ApiTermsofserviceTermsofservice;
    }
  }
}
