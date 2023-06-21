import docx2txt
import os
from chat_gpt import OpenAIAPI

def process_files_with_gpt(file1_path, file2_path):
    # Check if the files exist
    if not os.path.isfile(file1_path) or not os.path.isfile(file2_path):
        return {"status": "error", "message": "One or both input files do not exist."}

    # Convert the docx files to text
    text1 = docx2txt.process(file1_path)
    text2 = docx2txt.process(file2_path)

    # Concatenate the texts from the two files
    input_text = text1 + "\n" + text2

    # Placeholder for API call to GPT-4
    output_text = call_gpt4_api(input_text)  # Replace this line with your actual API function

    # Write the output text to a new docx file
    with open("output_resume.docx", "w") as file:
        file.write(output_text)

    return {"status": "success", "message": "Resume created successfully"}

def call_gpt4_api(input_text):
    # Replace this function with your actual GPT-4 API function
    # Here I'm just returning the input_text as-is
    return input_text
