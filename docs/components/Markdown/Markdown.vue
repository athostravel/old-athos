<template>
    <div>
        <div id="markdown" class="s-docs">
            <slot />
        </div>
    </div>
</template>

<script>
    import marked from 'marked'
    import utils from '@/mixins/utils'

    export default {
        mixins: [utils],
        mounted: function () {
            const markdown = this.$el.querySelector('#markdown')
            marked.Slugger.prototype.slug = this.stringToSlug
            markdown.innerHTML = this.markdownToHtml(markdown.innerHTML)
        },
        methods: {
            markdownToHtml (code) {
                const renderer = new marked.Renderer()
                return marked(this.trimTabs(code), { renderer })
            }
        }
    }
</script>
