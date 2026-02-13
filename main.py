from flask import Flask, request, send_file, render_template, abort
from merger import merge_pdfs
import os
import time

app = Flask(import_name=__name__)


ALL_FILE_PATHS = []

def create_temp_files(files):
    temp = []
    for file in files:
        filename: str = file.filename
        if not filename:
            continue
        directory = f"temp{time.time()}"
        os.mkdir(directory)
        
        file_path = os.path.join(directory, filename)

        file.save(file_path)
        
        temp.append(file_path)
    return temp


def clean():
    dirs = os.listdir("./")
    for d in dirs:
        if "merged" in d:
            os.remove(d)

@app.route("/", methods=["GET", "POST"])
def merge_pdf():
    clean()
    if request.method == "POST":
        files = request.files.getlist("file_input")
        print(files)
        if files:
            pdf_paths = create_temp_files(files=files)

            output_file = f"merged{time.time()}.pdf"
            merge_pdfs(pdf_paths, output_file)

            for path in pdf_paths:
                directory = os.path.split(path)
                os.remove(path)
                os.removedirs(directory[0])

            return send_file(output_file, as_attachment=True)
        else:
            return abort(404, description="Error Occured")
        

    return render_template("index.html")
    
if __name__ == "__main__":
    app.run(debug=False, port=5000, host="0.0.0.0")
