const chatbotsteps = [
    {
        id: '1',
        message: 'Welcome to react chatbot!',
        trigger: '2',
    },
    {
        id: '2',
        message: 'Let\'s calculate your BMI (Body Mass Index)',
        trigger: '3',
    },
    {
        id: '3',
        message: 'Please type your height (cm)',
        trigger: 'height',
    },
    {
        id: 'height',
        user: true,
        trigger: '4',
    },
    {
        id: '4',
        message: 'Please type your weight (kg)',
        trigger: 'weight',
    },
    {
        id: 'weight',
        user: true,
        trigger: '5',
    },
    {
        id: '5',
        message: 'Thanks! Check out your BMI',
        trigger: '6',
    },
    {
        id: '6',
        end: true,
    },
]
export default chatbotsteps;