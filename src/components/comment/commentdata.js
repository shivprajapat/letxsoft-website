import user1 from '../../Assets/images/comment/user1.jpg';
import user2 from '../../Assets/images/comment/user2.jpg';
import user3 from '../../Assets/images/comment/user3.jpg';
import user4 from '../../Assets/images/comment/user4.jpg';

export const commentdata = [
    {
        id: 1,
        c_title: "Steven Smith ",
        c_img: user2,
        c_desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
        c_date: 'APRIL 24, 2019 AT 10:59 AM',
        comment_data: [
            {
                img: user1,
                title: "John Jones",
                desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.", date: 'APRIL 24, 2019 AT 10:59 AM'
            }
        ]
    },
    {
        id: 2,
        c_title: "Sarah Taylor",
        c_img: user3,
        c_desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
        c_date: 'APRIL 24, 2019 AT 10:59 AM',
        comment_data: [
            {
                img: user4,
                title: "Steven Smith",
                desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.", date: 'APRIL 24, 2019 AT 10:59 AM'
            }
        ]
    },
    {
        id: 3,
        c_img: user4,
        c_title: "John Doe",
        c_desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
        c_date: 'APRIL 24, 2019 AT 10:59 AM',
        comment_data: [
            {
                img: user1,
                title: "John Jones",
                desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.", date: 'APRIL 24, 2019 AT 10:59 AM'
            }
        ]
    }
]