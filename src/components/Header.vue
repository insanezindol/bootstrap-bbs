<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">Vue.js로 게시판 만들기</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/board/free">자유게시판</b-nav-item>
                <b-nav-item to="/guide1">가이드</b-nav-item>
            </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return{}
    }
}
</script>