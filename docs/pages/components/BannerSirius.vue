<template>
    <Layout>
        <Markdown>
            # Banner Sirius
        </Markdown>

        <CodePreview width="435" vertical>
            <AtBannerSirius
                :picture="picture"
                :button="button"
                :price="price"
            />

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
