# Step 4 – Quantitative Analysis and Detection Limit

In this final step, you will perform a **quantitative evaluation** of your Raman spectra.  
The goal is to determine how the **Raman peak intensity** correlates with **ethanol concentration** in water and to evaluate the **limit of detection (LOD)** and **measurement uncertainty**.

---

## 🎯 Objectives

- Construct a **calibration curve** (intensity vs. concentration)  
- Determine the **linear range** and **limit of detection**  
- Propagate measurement uncertainties (fit parameters, noise, calibration)  
- Compare your results with literature values and discuss limitations  

---

## 📊 Data Preparation

Before starting the analysis, ensure you have:

- [ ] Calibrated spectra from Step 2  
- [ ] Raman spectra of ethanol–water mixtures from Step 3  
- [ ] Consistent integration times and laser power  
- [ ] Metadata file with sample concentrations and acquisition parameters  

Your data files should be structured as:

05_Data/  
├─ calibration/  
├─ ethanol_water_series/  
│ ├─ ethanol_0pct.csv  
│ ├─ ethanol_20pct.csv  
│ ├─ ethanol_40pct.csv  
│ ├─ ethanol_60pct.csv  
│ ├─ ethanol_80pct.csv  
│ └─ ethanol_100pct.csv  
└─ ouzo/

---

## 💻 Python Analysis

### 💻 Open the interactive notebook (Binder):

[![Open in Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/adv-labs-ufr/handbook/main?labpath=experiments/fp1/raman/02_Notebooks/ethanol_concentration_fit.ipynb)
👉 [Ethanol Concentration Fit Notebook](../02_Notebooks/ethanol_concentration_fit.ipynb)  
### 🔧 Helper Functions  
Reusable functions for peak fitting, baseline subtraction, smoothing, and λ ↔ Raman shift conversion  
[![Open in Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/adv-labs-ufr/handbook/main?labpath=experiments/fp1/raman/02_Notebooks/helper_peakfit_functions.ipynb)  
👉 [Open helper_peakfit_functions.ipynb](../02_Notebooks/helper_peakfit_functions.ipynb)

This notebook guides you through the complete analysis workflow:

1. **Import spectra and metadata**
2. **Baseline correction** and noise estimation  
3. **Peak fitting** (Gaussian or Lorentzian) around 1050–1450 cm⁻¹  
4. **Extraction of peak heights / areas**  
5. **Linear regression:** intensity $I = a \cdot c + b$
6. **Error propagation** and **goodness-of-fit** evaluation  
7. **Determination of LOD** and **quantification range**  
8. Visualization of calibration curve and residuals  

---

## 📈 Example Calibration Curve

A typical calibration of the 1050 cm⁻¹ C–O stretch peak may look like:

| Ethanol concentration (%) | Peak area (arb. units) |
|----------------------------|------------------------|
| 0 | 0 |
| 20 | 1.8 |
| 40 | 3.6 |
| 60 | 5.2 |
| 80 | 6.7 |
| 100 | 8.1 |

**Fitted relation (linear model):**
$$
I(c) = (0.081 \pm 0.003)\,c + (0.05 \pm 0.08)
$$

**Coefficient of determination:**
$$
R^2 = 0.996
$$
---

## 📉 Determination of Detection Limit (LOD)

The **limit of detection (LOD)** is defined as:
$$
\text{LOD} = \frac{3\sigma_{\text{blank}}}{a}
$$

where  
- $\sigma_{\text{blank}}$ = standard deviation of baseline (e.g. water spectrum)  
- $a$ = slope of calibration curve  

Compute LOD and discuss whether it is limited by **noise**, **fit error**, or **systematic offsets** (e.g., background drift).

---

## 🧮 Uncertainty Propagation

Consider the following sources:

| Source | Symbol | Comment |
|---------|--------|----------|
| Calibration fit error | \( \sigma_a, \sigma_b \) | From linear regression covariance |
| Spectral noise | \( \sigma_I \) | From baseline or repeated scans |
| Concentration preparation | \( \sigma_c \) | From volumetric mixing errors |
| Laser power fluctuations | \( \sigma_P \) | From output drift (~5%) |

Propagate uncertainties using:

$$\sigma_{I}^{2}=\left(\frac{\partial I}{\partial a}\sigma_{a}\right)^{2}+\left(\frac{\partial I}{\partial b}\sigma_{b}\right)^{2}+\left(\frac{\partial I}{\partial c}\sigma_{c}\right)^{2}$$

Include numerical error estimates in your final report.

---

## 🧠 Discussion Points

Reflect on the following:

- Is the calibration relationship strictly linear?  
- How does **noise** or **background fluorescence** affect precision?  
- What is the smallest ethanol concentration that can be confidently distinguished from pure water?  
- Could temperature or alignment drift influence intensity ratios?  
- How might a **non-linear spectrometer calibration** (from Step 2) impact concentration accuracy?  

---

## 📘 Suggested Report Structure

1. **Introduction:** Raman scattering, motivation, goal  
2. **Methods:** Setup, laser parameters, sample preparation  
3. **Results:** Calibration plot, regression table, LOD  
4. **Discussion:** Uncertainties, limitations, improvements  
5. **Appendix:** Python scripts, raw data tables, error propagation derivations

A LaTeX / Markdown template is available under:  
[`../07_Report_Template/lab_report_outline.md`](../07_Report_Template/lab_report_outline.md)

---

## ✅ Completion Checklist for Step 4

- [ ] Peak intensities extracted for all ethanol concentrations  
- [ ] Calibration curve plotted and regression coefficients determined  
- [ ] LOD and uncertainties evaluated  
- [ ] Comparison to literature or previous results discussed  
- [ ] Lab notebook updated and analysis files saved  
- [ ] Report outline prepared for submission  

---

## 🧩 Further Reading

- [Error Analysis and Fitting](../03_Background/error_analysis_and_fitting.md)  
- [Theory of Raman Scattering](../03_Background/theory_raman_scattering.md)  
- Loudon, *The Quantum Theory of Light Scattering*  
- Long, *The Raman Effect* (Wiley, 2002)  

---

## 🔗 Next Steps

➡ Proceed to [Optional tasks](optional_tasks.md)  
⬅ Return to [Step 3 – Raman Measurements](step3_raman_measurement.md)  
⬅ Or go back to [Experiment Guide Index](index.md)
