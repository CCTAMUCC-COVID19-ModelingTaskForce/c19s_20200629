(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["pages/Updates"],{

/***/ "./src/pages/Updates.mdx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Updates_MDXContent; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");

// CONCATENATED MODULE: ./src/assets/text/updates.md
var _jsxFileName = "/home/ekrell/Documents/Work/repos/COVID19/c19s_20200629/covid19_scenarios/src/assets/text/updates.md";


/* @jsx mdx */

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(esm["b" /* mdx */])("div", Object.assign({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }));
};

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({
  components,
  ...props
}) {
  return Object(esm["b" /* mdx */])(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }
  }), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, `The SARS-CoV-2 is a novel virus and we are learning more about the virus every day. Scientists around the world are
studying how the virus spreads and how it affects people of different age, sex, or those with pre-existing conditions.
Dozens of scientific papers are published every day.`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, `As we learn more about the virus, we try to update our model and the parameters. However, updates to the model will mean
that a run of the model from last week might give slightly different results from a run now. These differences arise for
two types of reasons`), Object(esm["b" /* mdx */])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, Object(esm["b" /* mdx */])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, `We changed the default parameters because we think they more accurately reflect what we know about the virus. In this
case, reverting to old parameters should give the same results.`), Object(esm["b" /* mdx */])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, `We changed the underlying model to be more realistic or because there were some bugs or inaccuracies. In this case,
even the same parameters will not necessarily give the same results`)), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, `We realize this can be confusing, but in this evolving situation, this is difficult to avoid. We try to summarize the
most significant model changes below.`), Object(esm["b" /* mdx */])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, `2020-06-14: Default plots are now include weekly cases and deaths`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, `Most locations have a pronounced weekly variation of case and fatality counts which have administrative rather than epidemiological reasons.
We therefore decided to plot case counts and deaths as a rolling average over the last seven days, resulting in much smoother trajectories.
To align with this change of presented the observations, we also show weekly deaths of the model instead of cumulative deaths.
The latter are still available but not enabled by default.
Click on grayed out items in the plot legend to enable these curves.`), Object(esm["b" /* mdx */])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, `2020-06-14: Median curve is now deterministic`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, `Several users were surprised that the median curve is quite variable from run to run despite the parameter inputs
being deterministic. The underlying reason for this behavior is that the app samples parameters from the parameter ranges
and plots the median of this often small sample. Since these parameters affect exponential growth, small variation in
the sample can result in large variation in the output. We now generate an additional trajectory where each
parameter is set to its median value. This trajectory should behave like the median trajectory in a large sample
and is plotted instead of the sample median.`), Object(esm["b" /* mdx */])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, `2020-06-09: Bugfix in mitigationInterval sampling.`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, `Our simulations include parameter uncertainty by sampling parameters from user-specified ranges.
For somewhat subtle reasons, this sampling procedure behaved differently in the production and the development
environment which result in using only one realization of the mitigation parameters.
This was patched in `, Object(esm["b" /* mdx */])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://github.com/neherlab/covid19_scenarios/pull/729/commits/35ba172229c944fa0b88efbd1e112ecdcd71e97f"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }), `commit`), `.
As a result, you should expect that the confidence intervals increased, while the jumpiness from one realization to another
should be reduced.`), Object(esm["b" /* mdx */])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, `2020-05-22: Changes to the parameter presets`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, `Our parameter presets for R0, the initial number of cases, and interventions are meant to facilitate adjusting a
scenario to the developments in your community. They are not sophisticated inferences -- this would
require dedicated procedures for different regions that each come with their own peculiarities in reporting.
But with more data available, we can estimate more parameters directly from data that should result in better
starting points.`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, `We now estimate the initial R0, the Re in the last three weeks of available data, and time point at which the R0 changed.
Together with estimates of the initial number of cases, the resulting fits track data for communities with
robust data fairly well. We hope this facilitates further manual optimization.`), Object(esm["b" /* mdx */])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, `2020-04-29: Allow for parameter uncertainty`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, `Since release 1.2.0, parameters that affect the growth rate (R0 and the mitigation efficacy) are specified as ranges.
Simulation results are very sensitive to these parameters and we wanted to make this clear. Instead of one number, the
user now has to specify two numbers that indicate the plausible lower and upper values of the parameter. The model will
then randomly sample a number of combinations of the parameters, each uniformly from the range and run multiple
simulations. The results graph show the median and a shaded area indicating the 20th and 80th percentile. By setting
upper and lower ranges of a parameter to the same value, the simulation will revert back to its previous version.`), Object(esm["b" /* mdx */])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, `2020-04-06: Scenario parameters estimated from data`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, `We have begun fitting a few individualized parameters for scenarios based upon COVID-19 case data provided we have
access to a trusted source updated daily. Currently the estimated parameters are R0, the initial time of the epidemic,
and the fraction of infections sampled by the region. If you don't find your region of interest in the list, please
visit our `, Object(esm["b" /* mdx */])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://github.com/neherlab/covid19_scenarios/tree/master/data"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), `Github`), ` to find details about how to
contribute!`), Object(esm["b" /* mdx */])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, `2020-04-02: Reduce latency time`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, `Our initial model assumed a serial interval (time between subsequent infections) of 7-8 days based on research published
by `, Object(esm["b" /* mdx */])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://doi.org/10.1056/NEJMoa2001316"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }), `Li et al `), `. This was split in a latency of 5 days and an infectious period of
3 days. More recent research by `, Object(esm["b" /* mdx */])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://www.medrxiv.org/content/10.1101/2020.03.05.20031815v1"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 35
    }
  }), `Ganyani et al`), ` suggests
the serial interval might be closer to 5-6 days. This change will result in smaller estimates for R0 for the same
doubling time. A smaller R0 implies that infection control measures are more effective, so this is good news!`), Object(esm["b" /* mdx */])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, `2020-03-30: Decrease integration time step`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, `Our previous code stepped the ODE forward in 6h intervals. This large step size results in inaccuracies, in particular
as we are using first order integration scheme. This step size is now reduced to 0.05 days. This can change the output
of the model by a few percent. We will soon move to a higher order integration scheme for more accurate ODE integration.`), Object(esm["b" /* mdx */])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, `2020-03-26: Modification of the model to allow for more realistic latency distributions`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, `In this update, we replaced the single exposed category with a sequence of three exposed categories. The single category
implicitly assumes that individuals spend an exponentially distributed time in the "exposed but not yet infectious"
state. The peak of the exponential distribution is at zero implying that many individuals spend a very short time in
this category while others spend a much longer time. In reality, it will take at least 2-3 days before the virus has
grown to sufficient numbers before somebody is infectious. Multiple exposed categories effectively generate an
`, Object(esm["b" /* mdx */])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Erlang_distribution"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 3
    }
  }), `Erlang distribution`), ` (a special case of a Gamma distribution) with a
peak away from zero.`), Object(esm["b" /* mdx */])("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, `2020-03-18: Take available hospital beds into account`), Object(esm["b" /* mdx */])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, `Early version of our model used the number of available hospital beds only as a guide to the eye -- exceeding the ICU
capacity did not results in an increased fatality rate. We changed this by adding an additional category "overflow"
which models patients that are critically ill but don't get the treatment they need because no ICUs are available. These
individuals die at an increased rate. In the allocation algorithms, younger individuals are given priority.`));
}
_c = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c;

$RefreshReg$(_c, "MDXContent");
// EXTERNAL MODULE: ./node_modules/reactstrap/es/index.js + 94 modules
var es = __webpack_require__("./node_modules/reactstrap/es/index.js");

// CONCATENATED MODULE: ./src/pages/Updates.mdx
var Updates_jsxFileName = "/home/ekrell/Documents/Work/repos/COVID19/c19s_20200629/covid19_scenarios/src/pages/Updates.mdx";


/* @jsx mdx */




const Updates_makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(esm["b" /* mdx */])("div", Object.assign({}, props, {
    __self: this,
    __source: {
      fileName: Updates_jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }));
};

const Updates_layoutProps = {};
const Updates_MDXLayout = "wrapper";
function Updates_MDXContent({
  components,
  ...props
}) {
  return Object(esm["b" /* mdx */])(Updates_MDXLayout, Object.assign({}, Updates_layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: Updates_jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }), Object(esm["b" /* mdx */])(es["g" /* Container */], {
    mdxType: "Container",
    __self: this,
    __source: {
      fileName: Updates_jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, Object(esm["b" /* mdx */])(es["y" /* Row */], {
    mdxType: "Row",
    __self: this,
    __source: {
      fileName: Updates_jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, Object(esm["b" /* mdx */])(es["e" /* Col */], {
    mdxType: "Col",
    __self: this,
    __source: {
      fileName: Updates_jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, Object(esm["b" /* mdx */])("h1", {
    __self: this,
    __source: {
      fileName: Updates_jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, "Updates to model"), Object(esm["b" /* mdx */])(MDXContent, {
    mdxType: "Updates",
    __self: this,
    __source: {
      fileName: Updates_jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  })))));
}
Updates_c = Updates_MDXContent;
;
Updates_MDXContent.isMDXComponent = true;

var Updates_c;

$RefreshReg$(Updates_c, "MDXContent");

/***/ })

}]);
//# sourceMappingURL=/sourcemaps/Updates.js.map