# Step 2 – Spectrometer Calibration (Na / Hg Lamps)

In this step you will explore how to **calibrate the USB2000+ spectrometer** using the discrete emission lines of sodium and mercury lamps.  
How can we translate a detector’s pixel number into an actual wavelength — and how precise can that relationship be made?

---

## 🎯 Objective

What function best converts the **detector pixel number _p_** into the corresponding **wavelength λ (in nm)**?  
You will determine the coefficients of a polynomial relation  

\[
\lambda(p) = a_0 + a_1 p + a_2 p^2 + \dots
\]

and evaluate how well it reproduces known spectral lines.

---

## ⚙️ Equipment Overview

| Component | What to think about |
|------------|--------------------|
| **Na lamp** | Why is its bright yellow doublet (589.0–589.6 nm) useful for checking the high-wavelength end? |
| **Hg lamp** | Which of its many lines (404.7, 435.8, 546.1, 577.0, 579.1 nm) give you the best spread for calibration? |
| **USB2000+ spectrometer** | How do pixel number, grating dispersion, and non-linearity relate? |
| **Optical fiber** | How can you ensure stable light coupling from the lamp into the spectrometer? |
| **White-light source (optional)** | When might a continuous spectrum help check the overall wavelength range? |

---

## 🧩 Exploration and Data Collection

### 1 – Warm-up and Preparation
Before recording, what must be stable for reliable spectra — the lamps, the spectrometer, or both?  
After a few minutes of warm-up, how can you tell that the signal level is appropriate and not saturated?  
Would recording a **dark spectrum** help you later subtract background counts?

---

### 2 – Acquiring Reference Spectra
How could you record the **Hg** and **Na** spectra so that their peaks are clearly resolved yet unsaturated?  
Try saving them as `Hg_reference.csv` and `Na_reference.csv`.  
What additional information might a white-light spectrum provide?

---

### 3 – Identifying Calibration Lines
Which emission lines from the table below are clearly visible in your data?  
Can you find at least five well-separated peaks covering the full wavelength range?

| Lamp | λ (nm) | Region | Comment |
|------|---------|--------|----------|
| Hg | 404.656 | violet | strong, narrow |
| Hg | 435.833 | blue | mid-range |
| Hg | 546.074 | green | high intensity |
| Hg | 577.045 | yellow | often blends with 579 nm |
| Hg | 579.066 | yellow | secondary |
| Na | 589.0 / 589.6 | yellow doublet | excellent high-λ reference |

---

## 🧮 Analysis and Fitting

How can you determine the **pixel position** of each emission line — visually, or by fitting a Gaussian to each peak?  
Once you have (pixel, wavelength) pairs, which polynomial order gives the smallest residuals without overfitting?  
Does the USB2000+ behave linearly enough, or do you need a quadratic term?

➡ Explore these steps interactively in the notebook:

[![Open in Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/adv-labs-ufr/handbook/main?labpath=experiments/fp1/raman/02_Notebooks/calibration_hg_na.ipynb)  
[**Calibration Notebook**](../02_Notebooks/calibration_hg_na.ipynb)

Inside, you will:
- Fit Gaussians to individual emission peaks  
- Obtain the pixel–wavelength calibration coefficients  
- Visualize residuals and estimate uncertainties  
- Discuss how non-linearity affects later Raman-shift conversion  

---

## ⚠️ Reflection and Good Practice

- How does slit width or integration time influence peak overlap?  
- Why should all later Raman spectra use identical spectrometer settings?  
- If your peaks appear shifted, could OceanView have applied its own built-in calibration?  
- Do the Na and Hg lines sufficiently cover your Raman excitation range (≈ 530–650 nm)?  

---

## 🧾 What to Document

After completing the fit, summarize your findings:

| Quantity | Symbol | Example |
|-----------|---------|---------|
| Fit coefficients | a₀, a₁, a₂ | 400.12, 0.252, −1.1 × 10⁻⁵ |
| RMS residual | σ_fit | 0.08 nm |
| Lines used | N | 6 |
| Covered range | – | 400–600 nm |

Plot the residuals (λ_ref − λ_fit).  
Would adding a cubic term improve them significantly — or simply fit noise?

---

## ✅ Before You Proceed

☐ Hg and Na spectra recorded  
☐ Peaks identified and pixel positions measured  
☐ Polynomial calibration performed and residuals inspected  
☐ Calibration constants and uncertainties noted in your lab book  
☐ Raw-mode data confirmed (no internal OceanView calibration)

---

## 🧠 Background Reading

- [Raman and Rayleigh Scattering – Theory](../03_Background/theory_raman_scattering.md)  
- [Spectrometer Design and Grating Dispersion](../03_Background/instrumentation_spectrometer_pmt.md)  
- [Error Propagation in Polynomial Fits](../03_Background/error_analysis_and_fitting.md)

---

### 🧩 Pre-Lab Preparation Link

When you have reviewed this step, you can test your understanding in the interactive pre-lab section:  
👉 [**Pre-Lab Preparation Questions →**](questions_safety_reflection.md)

These questions cover the setup, alignment, safety, and calibration principles discussed so far.  
Each can be expanded to reveal concise example answers.

---
