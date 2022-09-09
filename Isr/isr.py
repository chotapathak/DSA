import numpy as np
# import matplotlib.pyplot as plt
import matplotlib.image as imread
import os

plt.rcParams['figure.figsize'] = [16, 8]

A = imread('./deva.jpeg')
B = np.mean(A, axis=2)
print(B)
# img = plt.imshow(B, cmap='gray')
print(A.shape)