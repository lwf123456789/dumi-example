import { defineConfig } from 'dumi';

export default defineConfig({
    outputPath: 'docs-dist',
    themeConfig: {
        name: 'Nim UI',
        logo: 'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
    },
    plugins: ['@umijs/plugins/dist/tailwindcss'],
    tailwindcss: {},
    resolve: {
        docDirs: ['docs'],  // 自动扫描 docs 目录生成文档
    },
});