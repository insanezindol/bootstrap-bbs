export default {
    User: [
        {
            user_id: 1,
            name: 'one',
            created_at: '2019-10-01 10:00:00'
        },
        {
            user_id: 2,
            name: 'two',
            created_at: '2019-11-01 11:00:00'
        },
        {
            user_id: 3,
            name: 'three',
            created_at: '2019-12-01 12:00:00'
        },
    ],
    Content: [
        {
            content_id: 1,
            user_id: 1,
            title: 'one 제목 1',
            context: 'one 내용 1',
            created_at: '2019-12-10 14:00:00',
            updated_at: null
        },
        {
            content_id: 2,
            user_id: 1,
            title: 'one 제목 2',
            context: 'one 내용 2',
            created_at: '2019-12-10 15:00:00',
            updated_at: null
        },
        {
            content_id: 3,
            user_id: 2,
            title: 'two 제목 1',
            context: 'two 내용 1',
            created_at: '2019-12-10 16:00:00',
            updated_at: null
        },
        {
            content_id: 4,
            user_id: 3,
            title: 'three 제목 1',
            context: 'three 내용 1',
            created_at: '2019-12-10 17:00:00',
            updated_at: null
        }
    ],
    Comment: [
        {
            comment_id: 1,
            user_id: 1,
            content_id: 3,
            context: '생일 축하해요!',
            created_at: '2019-12-15 14:00:00',
            updated_at: null
        },
        {
            comment_id: 2,
            user_id: 3,
            content_id: 3,
            context: '추카추카!',
            created_at: '2019-12-15 15:00:00',
            updated_at: null
        },
        {
            comment_id: 3,
            user_id: 2,
            content_id: 3,
            context: '방가방가!',
            created_at: '2019-12-15 16:00:00',
            updated_at: null
        }
    ],
    SubComment: [
        {
            subcomment_id: 1,
            comment_id: 3,
            user_id: 1,
            context: '이건 뭐야?!',
            created_at: '2019-12-15 14:00:00',
            updated_at: null
        }
    ]
}