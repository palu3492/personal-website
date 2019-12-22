
let app;
window.onload = setup;

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

function setup(){
    app = new Vue({
        el: '#app',
        data: {
            projectsType: 'Personal',
            currentProjectType: 'Websites',
            currentProject: 'Flashcards',
            personalProjects: {
                'Websites': {
                    'Flashcards': {
                        name: 'Flashcards',
                        images: [],
                        content: 'Chapter too parties its letters nor. Cheerful but whatever ladyship disposed yet' +
                        'judgment. Lasted answer oppose to ye months no esteem. Branched is on an ecstatic directly it.' +
                        'In post mean shot ye. There out her child sir his lived. Design at uneasy me season of branch' +
                        'on praise esteem. Abilities discourse believing consisted remaining to no. Mistaken no me' +
                        'denoting dashwood as screened. Whence or esteem easily he on. Dissuade husbands at of no if' +
                        'disposal. Behind sooner dining so window excuse he summer. Breakfast met certainty and' +
                        'fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr' +
                        'particular collecting it everything as indulgence. Seems ask meant merry could put. Age old' +
                        'begin had boy noisy table front whole given.'
                    },
                    'Stage Designer': {
                        name: 'Stage Designer',
                        images: [],
                        content: 'Test'
                    },
                    'Video Editor': {
                        name: 'Video Editor',
                        images: [],
                        content: 'Test'
                    },
                    'Web Cam Viewer': {
                        name: 'Web Cam Viewer',
                        images: [],
                        content: 'Test'
                    }
                },
                'JavaScript Game Development': {
                    'First Person Shooter': {
                        name: 'First Person Shooter',
                        images: [],
                        content: 'Test'
                    },
                    '3D Tennis': {
                        name: '3D Tennis',
                        images: [],
                        content: 'Test'
                    },
                    'Multiplayer Drawing Battle': {
                        name: 'Multiplayer Drawing Battle',
                        images: [],
                        content: 'Test'
                    },
                    'Multiplayer Snake': {
                        name: 'Multiplayer Snake',
                        images: [],
                        content: 'Test'
                    },
                    'City Builder': {
                        name: 'City Builder',
                        images: [],
                        content: 'Test'
                    },
                    '2D Hexagon Avoid': {
                        name: '2D Hexagon Avoid',
                        images: [],
                        content: 'Test'
                    },
                    'Typing Battle': {
                        name: 'Typing Battle',
                        images: [],
                        content: 'Test'
                    },
                    '"Game Engine"': {
                        name: '"Game Engine"',
                        images: [],
                        content: 'Test'
                    }
                },
                'Python Game Development': {
                    'Solitaire': {
                        name: 'Solitaire',
                        images: [],
                        content: 'Test'
                    },
                    'Top-Down Shooter': {
                        name: 'Top-Down Shooter',
                        images: [],
                        content: 'Test'
                    },
                    'Tetris': {
                        name: 'Tetris',
                        images: [],
                        content: 'Test'
                    },
                    'Snake': {
                        name: 'Snake',
                        images: [],
                        content: 'Test'
                    }
                },
                'Chrome Extensions': {
                    'Patreon Video Player': {
                        name: 'Patreon Video Player',
                        images: [],
                        content: 'Test'
                    },
                    'Code Mirror': {
                        name: 'Code Mirror',
                        images: [],
                        content: 'Test'
                    }
                },
                'Arduino & Raspberry Pi': {
                    'Christmas Star Lighting': {
                        name: 'Christmas Star Lighting',
                        images: [],
                        content: 'Test'
                    },
                    'Ping-pong Scoreboard': {
                        name: 'Ping-pong Scoreboard',
                        images: [],
                        content: 'Test'
                    }
                },
                'Python Apps': {
                    'Blackjack Simulator': {
                        name: 'Blackjack Simulator',
                        images: [],
                        content: 'Test'
                    },
                    'ReCaptcha Solver': {
                        name: 'ReCaptcha Solver',
                        images: [],
                        content: 'Test'
                    },
                    'Image Finder': {
                        name: 'Image Finder',
                        images: [],
                        content: 'Test'
                    }
                }
            }
        },
        computed: {
            projects: function(){
                if(this.projectsType === 'Personal'){
                    return this.personalProjects;
                }
            },
            projectName: function(){
                return this.projects[this.currentProjectType][this.currentProject].name;
            },
            content: function(){
                return this.projects[this.currentProjectType][this.currentProject].content;
            }
        },
        methods: {
            clickProject: function(type, name){
                this.currentProjectType = type;
                this.currentProject = name;
            }
        }
    });
}

