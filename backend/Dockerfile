FROM python:3.11-slim

# Set the working directory for the container
WORKDIR /code

# Requirements are copied first due to Docker caching
# Allows package installtion cmd to use cache, speeding up container build
COPY ./requirements.txt /code/requirements.txt

# Install the required packages - do not cache the downloads (since Docker will use its own cache) and upgrade if needed
RUN pip install --no-cache-dir --upgrade  -r /code/requirements.txt

# Copy the rest of the code
COPY ./ /code

EXPOSE 8888


CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8888"]