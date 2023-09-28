import React from 'react'
import { PlusOutlined } from "@ant-design/icons";
import { Form, Button, Radio, Checkbox, Input, Upload , Space} from "antd";
import FormItem from 'antd/es/form/FormItem';

const { TextArea } = Input;

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

export default function SupervisorForm({houseId}) {
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

  return (
    <div>
        <Form 
        layout='vertical'
        form={form}
        onFinish={handleSubmit}
        style={{
            display:"flex",
            flexDirection:'column'
        }}>
            <Form.Item 
            name='assetID'
            label={<span style={{ fontWeight: "bold" }}>Asset ID</span>}>
            <Input style={{width:'40%',background:'#C7C7C8'}} placeholder="Other " />
            </Form.Item>
            <Form.Item
            name='AssetAdress'
            label={<span style={{fontWeight:'bold'}}>Asset Address</span>}>
                <Input style={{width:'40%',background:'#C7C7C8'}} placeholder='other'/>
            </Form.Item>
            <Form.Item
            name='Your_Location'
            label={<span style={{fontWeight:'bold'}}>Your Location</span>}>
                <Input style={{width:'40%',background:'#C7C7C8'}}/>

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
            <span style={{ fontWeight: "bold" }}>Is the toilet clean ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">Not OK</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="isCleaned"
          label={
            <span style={{ fontWeight: "bold" }}>Is the floor clean ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">Not OK</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="isCleaned"
          label={
            <span style={{ fontWeight: "bold" }}>Is their water in the  floor ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">Not OK</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="isCleaned"
          label={
            <span style={{ fontWeight: "bold" }}>Are the basins clean ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">Not OK</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="isCleaned"
          label={
            <span style={{ fontWeight: "bold" }}>Are the toilets clean ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">Not OK</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="isCleaned"
          label={
            <span style={{ fontWeight: "bold" }}>Any water leaks ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">Not OK</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="isCleaned"
          label={
            <span style={{ fontWeight: "bold" }}> Exhaust fans working ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">Not OK</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="isCleaned"
          label={
            <span style={{ fontWeight: "bold" }}> Are all lights working ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">Not OK</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="isCleaned"
          label={
            <span style={{ fontWeight: "bold" }}> Are all taps ok ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">Not OK</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="isCleaned"
          label={
            <span style={{ fontWeight: "bold" }}> Any foul smell inside the toilet ?</span>
          }
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">Not OK</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="Remarks"
          label={
            <span style={{ fontWeight: "bold" }}> Any foul smell inside the toilet ?</span>
          }
        >
          <TextArea rows={4} style={{width:'40%'}} />
        </Form.Item>

        <Form.Item
          label="Upload"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            //    action="/upload.do"
            // beforeUpload={beforeUpload}
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
  )
}
