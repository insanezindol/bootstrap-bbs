<template>
    <div>
        <h3 v-if="ok">guide3</h3>
        <h3 v-else>no guide</h3>

        <template v-if="ok">
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
        <div>
            {{ randomVal }}
            <div v-if="randomVal > 0.5">
                이제 나를 볼 수 있어요
            </div>
            <div v-else>
                이제는 안보입니다
            </div>
        </div>

        <div>
            <input v-model="type"><br/>

            <div v-if="type === 'A'">
                AAA
            </div>
            <div v-else-if="type === 'B'">
                BBB
            </div>
            <div v-else-if="type === 'C'">
                CCC
            </div>
            <div v-else>
                Not A/B/C
            </div>
        </div>

        <div>&nbsp;</div>
        <div><a v-bind:href="url_prev">이전으로</a> || <a v-bind:href="url_next">다음으로</a></div>
    </div>
</template>
<script>
export default {
    name: "Guide3",
    data() {
        return {
            ok: true,
            type: "A",
            randomVal: Math.random(),
            url_prev: '/#/guide2',
            url_next: '/#/guide4',
        }
    },
}
</script>