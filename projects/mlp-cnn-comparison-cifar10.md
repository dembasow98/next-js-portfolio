---
title: "MLP and CNN comparison for CIFAR-10 dataset"
date: "15 JUN 2024"
banner: "/static/img/portfolio/mlp-cnn-comparison-cifar10/The-Differences-in-Architecture-between-a-Simple-MLP-and-a-CNN.ppm"
categories: [AI, MACHINE LEARNING, NEURAL NETWORKS]
tags: [Numpy, Python, Tensorflow, Keras, Convolutional Neural Networks]
description: "A simple comparison between MLP and CNN for the CIFAR-10 dataset"
github: "https://github.com/dembasowfr/mlp-cnn-comparison-cifar10"
---



## Introduction
This project is a comparison between MLP and CNN for the CIFAR-10 dataset. The CIFAR-10 dataset consists of 60000 32x32 colour images in 10 classes, with 6000 images per class. There are 50000 training images and 10000 test images. The dataset is divided into five training batches and one test batch, each with 10000 images. The test batch contains exactly 1000 randomly-selected images from each class. The training batches contain the remaining images in random order, but some training batches may contain more images from one class than another. Between them, the training batches contain exactly 5000 images from each class.

## Requirements
- Python 3.6
- Numpy
- Matplotlib
- Tensorflow
- Keras


## Usage
- First install the required libraries using the following command:
```bash
pip install -r requirements.txt
```
- Run the following command to train the MLP model:
```bash
python mlp.py
```
- Run the following command to train the CNN model:
```bash
python cnn.py
```

## Results
The MLP model achieved an accuracy of 50% on the test set, while the CNN model achieved an accuracy of 75% on the test set.

## Conclusion
The CNN model outperformed the MLP model on the CIFAR-10 dataset. This is because CNNs are able to capture spatial information in the images, which is important for image classification tasks.

## References
- [CIFAR-10 dataset](https://www.cs.toronto.edu/~kriz/cifar.html)
- [Keras documentation](https://keras.io/)
- [Tensorflow documentation](https://www.tensorflow.org/)
- [Deep Learning with Python by Francois Chollet](https://www.manning.com/books/deep-learning-with-python)
- [Deep Learning-Based Model Architecture for Time-Frequency Images Analysis](https://www.researchgate.net/publication/330078437_Deep_Learning-Based_Model_Architecture_for_Time-Frequency_Images_Analysis)