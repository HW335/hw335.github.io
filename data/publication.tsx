export const publication_categories: { c1: string; c2s: string[]; len: string}[] = [
    {
        c1: "Topic",
        c2s: [
            "Embodied AI",
            "Autonomous Driving",
        ],
        len: "grid-cols-2", // for unexpected error in shadcn component
    },
    {
        c1: "Year",
        c2s: [
            "2025",
            "2024",
            "2023",
            "2022",
            "2021",
        ],
        len: "grid-cols-5", // for unexpected error in shadcn component
    },
    {
        c1: "PI",
        c2s: [
            "Ping Luo",
            "Hongyang Li",
        ],
        len: "grid-cols-2", // for unexpected error in shadcn component
    },
]




export const publications: { 
    title: string; 
    authors: string; 
    proceedings: string; 
    links: { website: string; url: string; }[]; 
    keys: string[]; 
}[] = [
    {
        title: "Planning-oriented Autonomous Driving",
        authors: "Yihan Hu, Jiazhi Yang, Li Chen, Keyu Li, Chonghao Sima, Xizhou Zhu, Siqi Chai, Senyao Du, Tianwei Lin, Wenhai Wang, Lewei Lu, Xiaosong Jia, Qiang Liu, Jifeng Dai, Yu Qiao, Hongyang Li",
        proceedings: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2023",
        links: [
            {
                website: "Paper",
                url: "https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html",
            },
            {
                website: "GitHub",
                url: "https://github.com/OpenDriveLab/UniAD",
            },
            {
                website: "Video",
                url: "https://www.youtube.com/watch?v=cyrxJJ_nnaQ",
            },
            {
                website: "Slides",
                url: "https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf",
            },
        ],
        keys :[
            "2023", "Autonomous Driving", "End-to-End", "Hongyang Li"
        ],
    },
    {
        title: "AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems",
        authors: "Team AgiBot World",
        proceedings: "arXiv 2025",
        links: [
            {
                website: "Blog",
                url: "https://opendrivelab.com/blog/agibot-world/",
            },
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2503.06669",
            },
            {
                website: "GitHub",
                url: "https://github.com/OpenDriveLab/AgiBot-World",
            },
            {
                website: "Dataset",
                url: "https://huggingface.co/agibot-world",
            },
            {
                website: "Page",
                url: "http://agibot-world.com/",
            },
        ],
        keys :[
            "2025", "Embodied AI", "Hongyang Li",
        ],
    },
    {
        title: "Closed-Loop Visuomotor Control with Generative Expectation for Robotic Manipulation",
        authors: "Qingwen Bu, Jia Zeng, Li Chen, Yanchao Yang, Guyue Zhou, Junchi Yan, Ping Luo, Heming Cui, Yi Ma, Hongyang Li",
        proceedings: "The Conference on Neural Information Processing Systems (NeurIPS). 2024",
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2409.09016",
            },
            {
                website: "GitHub",
                url: "https://github.com/OpenDriveLab/CLOVER",
            },
            {
                website: "Video",
                url: "https://www.bilibili.com/video/BV1rHqZYeECL",
            },
        ],
        keys :[
            "2024", "Embodied AI", "Hongyang Li",
        ],
    },
    {
        title: "DriveLM: Driving with Graph Visual Question Answering",
        authors: "Chonghao Sima, Katrin Renz, Kashyap Chitta, Li Chen, Hanxue Zhang, Chengen Xie, Jens Beißwenger, Ping Luo, Andreas Geiger, Hongyang Li",
        proceedings: "European Conference on Computer Vision (ECCV), 2024",
        links: [
            {
                website: "Paper",
                url: "https://link.springer.com/chapter/10.1007/978-3-031-72943-0_15",
            },
            {
                website: "GitHub",
                url: "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                website: "Dataset",
                url: "https://huggingface.co/datasets/OpenDriveLab/DriveLM",
            },
            {
                website: "Page",
                url: "https://opendrivelab.com/DriveLM/",
            },
        ],
        keys :[
            "2024", "Autonomous Driving", "Hongyang Li",
        ],
    },
]
