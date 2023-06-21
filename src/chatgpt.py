import openai

def call_gpt4_api(input_text):
    openai.api_key = 'your-api-key'

    response = openai.Completion.create(
        engine="text-davinci-003",  # this would be replaced with the GPT-4 engine ID
        prompt=input_text,
        max_tokens=1500  # adjust this number based on your needs
    )

    return response.choices[0].text.strip()
