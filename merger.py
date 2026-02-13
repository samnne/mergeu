from PyPDF2 import PdfMerger
import sys


def merge_pdfs(pdf_files: list, output_file: str):
    """
    PDF FILE MERGER, CAUSE I AINT PAYING ADOBE!!!!


    thank you for your time.
    """
    if len(pdf_files) < 2:
        return "Provide at least 2 PDF"
    
    merger = PdfMerger()

    for pdf_file in pdf_files:
        merger.append(pdf_file)

    merger.write(output_file)
    merger.close()

    print(f"PDF files merged! file name: {output_file}")


if __name__ == "__main__":
    # example usage:
    if len(sys.argv) < 2:
        print("Please put pdf files for us!")

    input_pdfs = sys.argv[2:]
    output_file = sys.argv[1]

    merge_pdfs(input_pdfs, output_file)
