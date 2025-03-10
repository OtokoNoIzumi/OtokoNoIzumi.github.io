import yaml
import jinja2
import os
import json

# 加载简历数据
with open('resume_data.yaml', 'r', encoding='utf-8') as f:
    data = yaml.safe_load(f)

# 设置Jinja2模板
template_loader = jinja2.FileSystemLoader('.')
template_env = jinja2.Environment(loader=template_loader)
template = template_env.get_template('resume_template.html')

# 渲染HTML
output = template.render(**data)

# 保存到index.html
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(output)

# 提取敏感数据并保存到JSON文件
sensitive_data = {
    "phone": data["basic_info"]["phone"],
    "email": data["basic_info"]["email"],
    "education": []
}

# 如果有教育数据，添加到敏感信息中
if "education" in data:
    for edu in data["education"]:
        sensitive_data["education"].append({
            "school": edu["school"],
            "period": edu["period"],
            "details": edu["details"]
        })

# 保存敏感数据到JSON文件
with open('sensitive_data.json', 'w', encoding='utf-8') as f:
    json.dump(sensitive_data, f, ensure_ascii=False, indent=4)

print("简历已生成！敏感信息已分离到独立文件。")