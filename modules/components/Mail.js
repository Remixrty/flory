export default function Mail(name) {
    // const name = props.name
    return (
        `<div style=" margin: auto; background-color: rgba(211, 237, 239, 0.9); border-radius: 15px; width: 600px; height: 600px; border: 1px solid #ABABAB; padding: 40px;">
            <h1 style="text-align: center; font-family: 'Space Grotesk'; font-style: normal; font-weight: 300; font-size: 35px;
            line-height: 62px;">
                Здравствуйте, ${name}! <br/>Благодарю Вас за обращение!
            </h1>
            <h2 style="text-align: center; margin-top: 64px; font-family: 'Space Grotesk';
            font-style: normal;
            font-weight: 300;
            font-size: 30px;
            line-height: 30px;">
                В течение дня я пришлю Вам информацию по Вашему запросу.
            </h2>
            <h2 style="text-align: center; margin-top: 64px; font-family: 'Space Grotesk';
            font-style: normal;
            font-weight: 300;
            font-size: 25px;
            line-height: 22px;">
                С уважением,<br /> Ольга Григорьевых.
            </h2><br />
            <div>
                <p style="text-align: center; margin-top: 64px; font-family: 'Space Grotesk';
                font-style: normal;
                font-weight: 300;
                font-size: 25px;
                line-height: 32px;">Интерьерные картины. Роспись стен.<br />floriarty.ru</p>
            </div>
        </div>`
    )
}