import React from "react";
import {
  Container,
  Box,
  Stack,
  Typography,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../../../css/help.css";

export function HelpPage() {
  // ===== INITIALIZATIONS
  const [value, setValue] = React.useState("1");

  //==== HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  const faq = [
    {
      question: "To'lov qanaqa amalga oshiriladi?",
      answer:
        "To’lovni Payme, click ilovalari orqali amalga oshirishingiz mumkin!",
    },
    {
      question: "Buyurtmalar qancha vaqtda yetib keladi?",
      answer:
        "Buyurtmalar harid qilgan narsangizga qarab har xil vaqtda yetkazilishi mumkin. Maximum 1 soat ichida!",
    },
    {
      question:
        "Sayitdan foydalansam ma'lumotlarim hafsizligiga kafolat bormi?",
      answer:
        "albatta, bizning dasturchilamiz sizning ma'lumotlaringiz havfsizligiga kafolat berishadi",
    },
    {
      question: "Sayitda momo bo'sa kimga murojat qilaman?",
      answer:
        "Hurmatli mijoz, iltimos adminga xat yo'llash bo'limidan foydalaning",
    },
    {
      question:
        "Man foydalanuvchi emas biznesmen sifatida faoliyat yuritmoqchiman. Nima qilishim kerak?",
      answer:
        "Hurmatli mijoz, saytda ko'rsatilgan telefon raqamlarga qo'ng'iroq qilishingizni so'rab qolamiz!",
    },
    {
      question:
        "Man karea davlatidaman. O'zbekiston oilam uchun ovqat buyurtma qilmoqchiman. Viza yoki master kartalaridan foydalana olamanmi?",
      answer:
        "Albatta, chet eldan turib nafaqat visa va master balkim paypal dasturidan foydalangan holda buyurtma qilishingiz mumkin!",
    },
    {
      question:
        "Buyurtmani bekor qilmoqchiman lekin buni qanday qilishni bilmayman",
      answer:
        "Buyurtmani bekor qilish uchun Avvalo login qiling va buyurtmalarim bo'limidan kerakli bo'lgan buyurtmangizni bekor qilish tugmasi orqali bekor qilsangiz bo'ladi!",
    },
    {
      question: "Buyurtmani tolov qilish uchun nima qilish kerak?",
      answer:
        "Buyurtma uchun to'lovni amalga oshirish uchun login qilishingiz va buyurtmalarim sahifasiga o'tishingiz lozim. Ochilgan sahifadan to'lov qilish tugmasi orqali to'lovni amalga oshira olasiz",
    },
    {
      question: "Karta malumotlarimni qayerga kiritaman?",
      answer:
        "Karta ma'lumotlarini Buyurtmalarim sahifasining o'ng tomonida joylashgan maxsus joyga kiritishingiz darkor",
    },
    {
      question: "Buyurtma yakunlangandan song oz fikrimni qoldirishim shartmi?",
      answer:
        "Hurmatli mijoz, sizni fikr qoldirishga majburlamaymiz, lekin fikringiz biz uchun juda qadrli hisoblanadi!",
    },
    {
      question: "Maqola yozishni hohlayman",
      answer:
        "Maqola yozish uchun sahifam bo'limidan maqola yozish tugmasini bossangiz kifoya!",
    },
    {
      question: "Jonli muloqotga men ham qatnasha olamanmi",
      answer:
        "albatta buning uchun saytimizdan ro'yhatdan o'ting va Jamiyat bo'limidan bemalol foydalanishingiz va o'z fikrlaringizni yozib qoldirishingiz mumkin!",
    },
    {
      question:
        "Biror bir sahifani uzoq kuzatsam uni o'zimi sahifamdan tezda topib olish uchun nima qilishim kerak?",
      answer:
        "Buning uchun siz kuzatmoqchi bo'lgan foydalanuvchingizda follow bo'lishingiz kifoya qiladi!",
    },
    {
      question: "Sayt rivoji uchun o'z hisamni qoshmoqchiman",
      answer:
        "Albatta buning uchun adminga xat qoldirishigniz yoki berilgan telefon raqamlariga bog'lansangiz to'liqroq ma'lumot beriladi!",
    },
  ];
  const rules = [
    `Saytdan to'laqonli yani buyurtmalar qilish, jonli muloqotlardan foydalanishingiz uchun ro'yxatdan o'tishingiz shart.`,
    `Buyurtmalaringizga to'lovni amalga oshirganingizdan so'ng bekor qilishning imkoni yo'q shu sababli to'lovlarni amalga oshirishdan avval tekshirib oling.`,
    `Jonli muloqot vaqtida bexayo so'zlarni ishlatish mutlaqo taqiqlanadi.`,
    `Shaxsiy reklamalarni adminning ruxsatisiz yozish va tarqatish mumkun emas.`,
    `Maqolalaringiz odob doirasidan chiqib ketmasligi shart.`,
    `Barcha xarakatlaringiz adminlarimiz nazorati ostida bo'lani sabab iltimos talablarimizni xurmat qiling.`,
  ];

  return (
    <div className="help_page">
      <Container sx={{ my: "50px" }}>
        <TabContext value={value}>
          <Box className={"help_menu"}>
            <Box sx={{ borderBottom: 1,  borderColor: "divider" }}>
              <TabList
                value={value}
                onChange={handleChange}
                aria-label="lab API tabs example"
                style={{ display: "flex", justifyContent: "space-between" }}
                className="help_menu_box"
              >
                <Tab label="Qoidalar" value={"1"}></Tab>
                <Tab label="faq" value={"2"}></Tab>
                <Tab label="Adminga xat" value={"3"}></Tab>
              </TabList>
            </Box>
          </Box>
          <Stack>
            <Stack className={"help_main_content"}>
              <TabPanel value="1">
                <Stack className={"theRulse_box"}>
                  <Box className={"theRulseFrame"}>
                    {rules.map((ele, number) => {
                      return <p>{ele}</p>;
                    })}
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel value="2">
                <Stack className={"accordion_menu"}>
                  {faq.map((ele, number) => {
                    return (
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{ele.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{ele.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Stack>
              </TabPanel>
              <TabPanel value="3">
                <Stack className={"admin_letter_box"}>
                  <Stack className={"admin_letter_container"}>
                    <Box className={"admin_letter_frame"}>
                      <span>Adminga Xabar Qoldirish</span>
                      <p>
                        Assalomu alekum! Adminga xabar qoldirish uchun pasdagi
                        formlarni to’ldiring!
                      </p>
                    </Box>
                    <form
                      action="#"
                      method="POST"
                      className={"admin_letter_frame"}
                    >
                      <div className="admin_input_box">
                        <label>Ism</label>
                        <input
                          type="text"
                          name={"mb_nick"}
                          placeholder={"Ism"}
                        />
                      </div>
                      <div className="admin_input_box">
                        <label>Elektron Manzil</label>
                        <input
                          type="text"
                          name={"mb_email"}
                          placeholder={"Elektron Manzil"}
                        />
                      </div>
                      <div className="admin_input_box">
                        <label>Xabar</label>
                        <textarea
                          name={"mb_msg"}
                          placeholder={"Xabar"}
                        ></textarea>
                      </div>
                      <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: "30px"}}>
                        <Button type={"submit"} variant="contained">Jo'natish</Button>
                      </Box>
                    </form>
                  </Stack>
                </Stack>
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}
