<template>
    <Layout>
        <Markdown>
            # Price Button
        </Markdown>

        <CodePreview width="435" vertical>
            <AtPriceButton
                :button="button"
                :price="price"
                :tag="tag"
            >
                <AtIcon icon="phone" />
            </AtPriceButton>
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
                    icon: 'arrow-down',
                    text: 'button',
                    iconAlign: 'right'
                },
                price: {
                    before: '600',
                    text: 'desde',
                    value: '499'
                },
                tag: 'div'
            }
        }
    }
</script>
