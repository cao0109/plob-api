import type { Schema, Attribute } from '@strapi/strapi';

export interface AccordionItemsAccordionItem extends Schema.Component {
  collectionName: 'components_accordion_items_accordion_items';
  info: {
    displayName: 'accordion-item';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more.'>;
  };
}

export interface ClientsItemsClientsItem extends Schema.Component {
  collectionName: 'components_clients_items_clients_items';
  info: {
    displayName: 'clients-item';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u2018\u2019As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.\u2019\u2019'>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u2018\u2019As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.\u2019\u2019'>;
  };
}

export interface ExperiencesInnersExperiencesInner extends Schema.Component {
  collectionName: 'components_experiences_inners_experiences_inners';
  info: {
    displayName: 'experiences-inner';
    icon: 'arrowRight';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    description: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Best Strategic planning dolor sit amet consectetur adipiscing elit. risque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar. Best eone Strategic planning dolor.'>;
  };
}

export interface FeatureItemsCorporateCulture extends Schema.Component {
  collectionName: 'components_feature_items_corporate_cultures';
  info: {
    displayName: 'corporate culture';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    shortDesc: Attribute.String;
    btnText: Attribute.String;
  };
}

export interface FeatureItemsFeatureItem extends Schema.Component {
  collectionName: 'components_feature_items_feature_items';
  info: {
    displayName: 'feature-item';
    icon: 'arrowRight';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Best Strategic planning dolor sit amet, consectetur adipiscing elit. Scelerisque amet odio velit, eu, auctor. Aliquet nam elit nulla eget sodales dui pulvinar.'>;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Read More'>;
  };
}

export interface FooterLinksFooterLink extends Schema.Component {
  collectionName: 'components_footer_links_footer_links';
  info: {
    displayName: 'footer-link';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface FooterLinksNewsletter extends Schema.Component {
  collectionName: 'components_footer_links_newsletters';
  info: {
    displayName: 'newsletter';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface FunfactsItemsFunfactsItem extends Schema.Component {
  collectionName: 'components_funfacts_items_funfacts_items';
  info: {
    displayName: 'funfacts-item';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    number: Attribute.String & Attribute.Required;
    icon: Attribute.String & Attribute.Required;
  };
}

export interface GalleryItemsGalleryItem extends Schema.Component {
  collectionName: 'components_gallery_items_gallery_items';
  info: {
    displayName: 'gallery-item';
    icon: 'arrowRight';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PartnerItemsPartnerItem extends Schema.Component {
  collectionName: 'components_partner_items_partner_items';
  info: {
    displayName: 'partner-item';
    icon: 'arrowRight';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PlansFeaturesPlansFeature extends Schema.Component {
  collectionName: 'components_plans_features_plans_features';
  info: {
    displayName: 'plans-feature';
    icon: 'arrowRight';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'ri-check-line'>;
    feature: Attribute.String & Attribute.Required;
  };
}

export interface PlansTabsPlansTab extends Schema.Component {
  collectionName: 'components_plans_tabs_plans_tabs';
  info: {
    displayName: 'plans-tab';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    singlePlans: Attribute.Component<'single-plans.single-plan', true> &
      Attribute.Required;
  };
}

export interface ProcessItemsProcessItem extends Schema.Component {
  collectionName: 'components_process_items_process_items';
  info: {
    displayName: 'process-item';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    icon: Attribute.String & Attribute.Required;
    className: Attribute.String;
  };
}

export interface SinglePlansSinglePlan extends Schema.Component {
  collectionName: 'components_single_plans_single_plans';
  info: {
    displayName: 'single-plan';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDesc: Attribute.String;
    price: Attribute.String & Attribute.Required;
    period: Attribute.String & Attribute.Required;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Purchase Now '>;
    btnLink: Attribute.String & Attribute.DefaultTo<'/contact'>;
    planFeatures: Attribute.Component<'plans-features.plans-feature', true> &
      Attribute.Required;
  };
}

export interface SocialLinksSocialLink extends Schema.Component {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'social-link';
    icon: 'arrowRight';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    icon: Attribute.String & Attribute.Required;
  };
}

export interface TeamItemsTeamItem extends Schema.Component {
  collectionName: 'components_team_items_team_items';
  info: {
    displayName: 'team-item';
    icon: 'arrowRight';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    socialLink: Attribute.Component<'social-links.social-link', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accordion-items.accordion-item': AccordionItemsAccordionItem;
      'clients-items.clients-item': ClientsItemsClientsItem;
      'experiences-inners.experiences-inner': ExperiencesInnersExperiencesInner;
      'feature-items.corporate-culture': FeatureItemsCorporateCulture;
      'feature-items.feature-item': FeatureItemsFeatureItem;
      'footer-links.footer-link': FooterLinksFooterLink;
      'footer-links.newsletter': FooterLinksNewsletter;
      'funfacts-items.funfacts-item': FunfactsItemsFunfactsItem;
      'gallery-items.gallery-item': GalleryItemsGalleryItem;
      'partner-items.partner-item': PartnerItemsPartnerItem;
      'plans-features.plans-feature': PlansFeaturesPlansFeature;
      'plans-tabs.plans-tab': PlansTabsPlansTab;
      'process-items.process-item': ProcessItemsProcessItem;
      'single-plans.single-plan': SinglePlansSinglePlan;
      'social-links.social-link': SocialLinksSocialLink;
      'team-items.team-item': TeamItemsTeamItem;
    }
  }
}
