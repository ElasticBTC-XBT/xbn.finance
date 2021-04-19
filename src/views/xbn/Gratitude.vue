<template>
    <div>
        <section
                class="signin section illustration-section-01"
                :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
            <fragment>
                <gratitude-section1 image-fill/>
                <gratitude-section2/>
            </fragment>
        </section>
    </div>

</template>

<script>
    // import layout
    import CLayout from '@/layouts/LayoutDefault.vue'
    // import sections
    import GratitudeSection1 from "../../components/sections/gratitude/Section1";
    import GratitudeSection2 from "../../components/sections/gratitude/Section2";


    export default {
        name: 'GratitudeMain',
        components: {
            GratitudeSection1,
            GratitudeSection2
        },
        created() {
            this.$emit('update:layout', CLayout)
        },
    }
</script>
