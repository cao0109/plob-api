/**
 * casestudy controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::casestudy.casestudy', ({ strapi }) => ({
  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query('api::casestudy.casestudy').findOne({
        where: { slug: id },
        populate: ['image']
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
