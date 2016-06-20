const assign = require('object-assign');
const pagination = require('hexo-pagination');

hexo.config.index_generator = assign({
  per_page: typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page,
  order_by: '-date'
}, hexo.config.index_generator);

hexo.extend.generator.register('index', function(locals) {
  const config = this.config;
  const pages = locals.pages.sort(config.index_generator.order_by);
  const paginationDir = config.pagination_dir || 'page';

  return pagination('', pages, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
});
