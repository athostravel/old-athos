<template>
    <Layout>
        <Markdown>
            # Tetris Layout
        </Markdown>

        <CodePreview width="435">
            <AtLayoutTetris>
                <AtBannerSirius
                    title="¿Qué visitar en Vietnam en una semana?"
                    :button="button"
                    :price="price"
                    class="c-layout-tetris__item"
                />
                <AtBannerSirius
                    title="¿Qué visitar en Vietnam en una semana?"
                    :button="button"
                    :price="price"
                    class="c-layout-tetris__item"
                />
                <AtBannerSirius
                    title="¿Qué visitar en Vietnam en una semana?"
                    :button="button"
                    :price="price"
                    class="c-layout-tetris__item"
                />
                <AtBannerSirius
                    title="¿Qué visitar en Vietnam en una semana?"
                    :button="button"
                    :price="price"
                    class="c-layout-tetris__item"
                />
                <AtBannerSirius
                    title="¿Qué visitar en Vietnam en una semana?"
                    :button="button"
                    :price="price"
                    class="c-layout-tetris__item"
                />
                <AtBannerSirius
                    title="¿Qué visitar en Vietnam en una semana?"
                    :button="button"
                    :price="price"
                    class="c-layout-tetris__item"
                />
                <AtBannerSirius
                    title="¿Qué visitar en Vietnam en una semana?"
                    :button="button"
                    :price="price"
                    class="c-layout-tetris__item"
                />
                <AtBannerSirius
                    title="¿Qué visitar en Vietnam en una semana?"
                    :button="button"
                    :price="price"
                    class="c-layout-tetris__item"
                />
                <AtBannerSirius
                    title="¿Qué visitar en Vietnam en una semana?"
                    :button="button"
                    :price="price"
                    class="c-layout-tetris__item"
                />
            </AtLayoutTetris>
        </CodePreview>
    </Layout>
</template>

<script>

    import Layout from '@/layouts/Default.vue'
    import CodePreview from '@/components/CodePreview/CodePreview.vue'
    import Markdown from '@/components/Markdown/Markdown.vue'

    export default {
        components: {
            Layout,
            CodePreview,
            Markdown
        },
        data () {
            return {
                button: {
                    text: 'Leer más',
                    icon: 'arrow-down',
                    iconAlign: 'right'
                },
                price: {
                    before: '600',
                    text: 'desde',
                    value: '499'
                }
            }
        }
    }
</script>
