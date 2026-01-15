import google.generativeai as genai

genai.configure(api_key="AIzaSyAjOi27_mF3rI9JFEz4o89v6_KJ5eT8Mqk")

print("Доступные модели:")
for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(m.name)