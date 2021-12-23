export const navBarItem = {
    "process": "Dashboard",
    "categories":[
        {
            "label": "HOME",
            "icon": "faHome",
            "active": true,
            "path": '/'
        },
        {
            "label": "Simple Tool",
            "icon": "faTools",
            "active": true,
            "menus":[
                {
                    "label": "Counter",
                    "icon": "faCalculator",
                    "active": true,
                    "path": '/Counter'
                },
            ]
        },
        {
            "label": "Algorithm",
            "icon": "faCalculator",
            "active": true,
            "menus":[
                {
                    "label": "Events",
                    "icon": "faHome",
                    "active": false,
                    "path": "/events"
                }
            ]
        },
        {
            "label": "Clone",
            "icon": "faClone",
            "active": true,
            "menus":[
                {
                    "label": "Events",
                    "icon": "faCalendar",
                    "active": true,
                    "path": "/events"
                }
            ]
        },
    ]
}