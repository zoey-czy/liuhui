import { Divider } from 'antd';

function Contact() {
  return (
    <div>
      <h2>office:location R1206 contact building</h2>
      <h2>Email:liuhui08@bit.edu.cn</h2>
      <Divider />

      <img style={{width:'60%'}} src={require("../../image/map.jpg")} alt="" />
    </div>
  );
}
export default Contact;
