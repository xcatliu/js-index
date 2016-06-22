/* global hexo */
const assign = require('object-assign');
const pagination = require('hexo-pagination');

hexo.config.index_generator = assign({
  per_page: typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page,
  order_by: '-date',
}, hexo.config.index_generator);

hexo.extend.generator.register('i18n-index', function (locals) {
  const config = this.config;
  const posts = locals.posts.sort(config.index_generator.order_by);
  const paginationDir = config.pagination_dir || 'page';

  return config.language.filter(lang => lang !== 'default').reduce((prev, lang) => {
    const filtedPosts = posts.filter(item => item.lang === lang);
    return prev.concat(pagination(lang, filtedPosts, {
      perPage: config.index_generator.per_page,
      layout: ['index'],
      format: `${paginationDir}/%d/`,
      data: {
        __index: true,
      },
    }));
  }, []);
});
