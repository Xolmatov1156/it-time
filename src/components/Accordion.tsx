import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  border : "1px solid",
  borderRadius: '15px',
  marginBottom: '12px',
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: '15px',
  padding: '10px 28px',
  backgroundColor: 'white',
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  borderRadius: "15px",
  padding: '16px',
  fontSize: '14px',
  color: '#4f4f4f',
}));

export default function AccordionUsage() {
  return (
    <div>
      <CustomAccordion>
        <CustomAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='noto'
        >
          Kursni bitirganimdan keyin ish topa olamanmi?
        </CustomAccordionSummary>
        <CustomAccordionDetails className='noto'>
        Ha albatta kursni muvaffaqiyatli tugatgan o'quvchilarimiz hozirda bir nechta kampaniyalarda ishlayapti.Siz ham shular qatorida bo'lishingiz mumkun 
        </CustomAccordionDetails>
      </CustomAccordion>
      <CustomAccordion>
        <CustomAccordionSummary
        className='noto'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Frontend yoki boshqa kurslarni tugatganman nima qilsam bo'ladi?
        </CustomAccordionSummary>
        <CustomAccordionDetails
        className='noto'
        >
        Biror bir kursni 100% to'liq tugatib ( masalan frontend bo'lsa JS advanced biror bir framework ) + gitda kamida ikkita loyihangiz bo'lsa ish uchun suhbatga chaqiramiz. Lekin chala yarim bitirgan bo'lsangiz Frontend kursni boshidan boshlab o'rgatamiz.
        </CustomAccordionDetails>
      </CustomAccordion>
      <CustomAccordion>
        <CustomAccordionSummary
        className='noto'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Flutterda dasturlashda qanday dizayn patternlaridan foydalaniladi?
        </CustomAccordionSummary>
        <CustomAccordionDetails
        className='noto'>
        Flutterda Widget Tree, State Management, BLoC (Business Logic Component), MVVM (Model-View-ViewModel), Provider, GetX kabilardan foydalaniladi
        </CustomAccordionDetails>
      </CustomAccordion>
    </div>
  );
}
