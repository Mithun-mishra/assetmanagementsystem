import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Button, Radio, Checkbox, Input, Upload , Space} from "antd";

const options = [
  {
    label: "Door locked",
    value: "Door locked",
  },
  {
    label: "No lights",
    value: "No lights",
  },
  {
    label: "No water",
    value: "No water",
  },
];

export default function CleanerForm({ houseId }) {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const beforeUpload = async (file) => {
    // try {
    //   const compressedFile = await new ImageCompressor(file, {
    //     quality: 0.6,
    //   }).compress();
    //   form.setFieldsValue({
    //     upload: [compressedFile],
    //   });

    //   return false;
    // } catch (error) {
    //   console.log(error);
    //   return false;
    // }
    console.log(file);
  };

  const isCleaned = Form.useWatch(["isCleaned"], form);
  return (
    <div>
      <Form
       layout="vertical"
       form={form}
      //  onFinish={handleSubmit}
       style={{
         display: "flex",
         flexDirection: "column",
         margin:"0",
       }}>
        <Form.Item 
        name='asset Id'
        label={<span style={{ fontWeight: "bold" }}>Asset ID</span>}>
          <Input style={{width:'40%',background:'#C7C7C8'}} placeholder="Other " />
        </Form.Item>
        <Form.Item 
        name='asset Address'
        label={<span style={{ fontWeight: "bold" }}>Asset Address</span>}>
          <Input style={{width:'40%',background:'#C7C7C8'}} placeholder="Other " />
        </Form.Item>
        <Form.Item 
        name='Last Visit'
        label={<span style={{ fontWeight: "bold" }}>Last Visit</span>}>
          <Input style={{width:'40%',background:'#C7C7C8'}} placeholder="Other " />
        </Form.Item>
        <Form.Item 
        name='Your Location'
        label={<span style={{ fontWeight: "bold" }}>Your Location</span>}>
          <Input style={{width:'40%',background:'#C7C7C8'}} placeholder="Other " />
        </Form.Item>

      </Form>

      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Form.Item
          name="isCleaned"
          label={
            <span style={{ fontWeight: "bold" }}>Was the toilet cleaned ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>

        {isCleaned === "no" ? (
          <>
            <Form.Item
              name="reason"
              label={<span style={{ fontWeight: "bold" }}>Reason</span>}
            >
              <Checkbox.Group options={options} />
            </Form.Item>
            <Form.Item name="otherReason" label={<span>Other</span>}>
              <Input style={{width:'40%'}} placeholder="Other " />
            </Form.Item>
          </>
        ) : (
          ""
        )}
        <Form.Item
          label="Upload"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            //    action="/upload.do"
            beforeUpload={beforeUpload}
            customRequest={({ file, onSuccess }) => {
              console.log(file);
            }}
            maxCount={1}
            listType="picture-card"
          >
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        {/* <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          
        </Form.Item> */}
        <Space style={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginLeft: '0'}}>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
          </Space>
          <br />
      </Form>
    </div>
  );
}
