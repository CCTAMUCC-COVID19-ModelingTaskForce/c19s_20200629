# This code parses date/times, so please
#
#     pip install python-dateutil
#
# To use this code, make sure you
#
#     import json
#
# and then, to convert JSON from a string, do
#
#     result = age_distribution_array_from_dict(json.loads(json_string))
#     result = age_distribution_data_from_dict(json.loads(json_string))
#     result = age_distribution_datum_from_dict(json.loads(json_string))
#     result = age_group_from_dict(json.loads(json_string))
#     result = case_counts_array_from_dict(json.loads(json_string))
#     result = case_counts_data_from_dict(json.loads(json_string))
#     result = case_counts_datum_from_dict(json.loads(json_string))
#     result = color_hex_from_dict(json.loads(json_string))
#     result = date_range_from_dict(json.loads(json_string))
#     result = integer_from_dict(json.loads(json_string))
#     result = integer_non_negative_from_dict(json.loads(json_string))
#     result = integer_positive_from_dict(json.loads(json_string))
#     result = mitigation_interval_from_dict(json.loads(json_string))
#     result = numeric_range_non_negative_from_dict(json.loads(json_string))
#     result = percentage_from_dict(json.loads(json_string))
#     result = percentage_range_from_dict(json.loads(json_string))
#     result = scenario_array_from_dict(json.loads(json_string))
#     result = scenario_datum_mitigation_from_dict(json.loads(json_string))
#     result = scenario_datum_population_from_dict(json.loads(json_string))
#     result = scenario_data_from_dict(json.loads(json_string))
#     result = scenario_datum_from_dict(json.loads(json_string))
#     result = scenario_datum_simulation_from_dict(json.loads(json_string))
#     result = severity_distribution_datum_from_dict(json.loads(json_string))
#     result = severity_distribution_data_from_dict(json.loads(json_string))
#     result = severity_distribution_array_from_dict(json.loads(json_string))
#     result = shareable_from_dict(json.loads(json_string))
#     result = schema_ver_from_dict(json.loads(json_string))
#     result = scenario_datum_epidemiological_from_dict(json.loads(json_string))

from enum import Enum
from typing import Any, List, Optional, TypeVar, Type, Callable, cast
from datetime import datetime
import dateutil.parser


schema_ver = '2.0.0'

T = TypeVar("T")
EnumT = TypeVar("EnumT", bound=Enum)


def from_int(x: Any) -> int:
    assert isinstance(x, int) and not isinstance(x, bool)
    return x


def to_enum(c: Type[EnumT], x: Any) -> EnumT:
    assert isinstance(x, c)
    return x.value


def from_list(f: Callable[[Any], T], x: Any) -> List[T]:
    assert isinstance(x, list)
    return [f(y) for y in x]


def from_str(x: Any) -> str:
    assert isinstance(x, str)
    return x


def to_class(c: Type[T], x: Any) -> dict:
    assert isinstance(x, c)
    return cast(Any, x).to_dict()


def from_none(x: Any) -> Any:
    assert x is None
    return x


def from_union(fs, x):
    for f in fs:
        try:
            return f(x)
        except:
            pass
    assert False


def from_datetime(x: Any) -> datetime:
    return dateutil.parser.parse(x)


def from_float(x: Any) -> float:
    assert isinstance(x, (float, int)) and not isinstance(x, bool)
    return float(x)


def to_float(x: Any) -> float:
    assert isinstance(x, float)
    return x


class AgeGroup(Enum):
    THE_09 = "0-9"
    THE_1019 = "10-19"
    THE_2029 = "20-29"
    THE_3039 = "30-39"
    THE_4049 = "40-49"
    THE_5059 = "50-59"
    THE_6069 = "60-69"
    THE_7079 = "70-79"
    THE_80 = "80+"


class AgeDistributionDatum:
    age_group: AgeGroup
    population: int

    def __init__(self, age_group: AgeGroup, population: int) -> None:
        self.age_group = age_group
        self.population = population

    @staticmethod
    def from_dict(obj: Any) -> 'AgeDistributionDatum':
        assert isinstance(obj, dict)
        age_group = AgeGroup(obj.get("ageGroup"))
        population = from_int(obj.get("population"))
        return AgeDistributionDatum(age_group, population)

    def to_dict(self) -> dict:
        result: dict = {}
        result["ageGroup"] = to_enum(AgeGroup, self.age_group)
        result["population"] = from_int(self.population)
        return result


class AgeDistributionData:
    data: List[AgeDistributionDatum]
    name: str

    def __init__(self, data: List[AgeDistributionDatum], name: str) -> None:
        self.data = data
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'AgeDistributionData':
        assert isinstance(obj, dict)
        data = from_list(AgeDistributionDatum.from_dict, obj.get("data"))
        name = from_str(obj.get("name"))
        return AgeDistributionData(data, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["data"] = from_list(lambda x: to_class(AgeDistributionDatum, x), self.data)
        result["name"] = from_str(self.name)
        return result


class AgeDistributionArray:
    all: List[AgeDistributionData]

    def __init__(self, all: List[AgeDistributionData]) -> None:
        self.all = all

    @staticmethod
    def from_dict(obj: Any) -> 'AgeDistributionArray':
        assert isinstance(obj, dict)
        all = from_list(AgeDistributionData.from_dict, obj.get("all"))
        return AgeDistributionArray(all)

    def to_dict(self) -> dict:
        result: dict = {}
        result["all"] = from_list(lambda x: to_class(AgeDistributionData, x), self.all)
        return result


class CaseCountsDatum:
    cases: Optional[int]
    deaths: Optional[int]
    hospitalized: Optional[int]
    icu: Optional[int]
    recovered: Optional[int]
    time: datetime

    def __init__(self, cases: Optional[int], deaths: Optional[int], hospitalized: Optional[int], icu: Optional[int], recovered: Optional[int], time: datetime) -> None:
        self.cases = cases
        self.deaths = deaths
        self.hospitalized = hospitalized
        self.icu = icu
        self.recovered = recovered
        self.time = time

    @staticmethod
    def from_dict(obj: Any) -> 'CaseCountsDatum':
        assert isinstance(obj, dict)
        cases = from_union([from_int, from_none], obj.get("cases"))
        deaths = from_union([from_int, from_none], obj.get("deaths"))
        hospitalized = from_union([from_int, from_none], obj.get("hospitalized"))
        icu = from_union([from_int, from_none], obj.get("icu"))
        recovered = from_union([from_int, from_none], obj.get("recovered"))
        time = from_datetime(obj.get("time"))
        return CaseCountsDatum(cases, deaths, hospitalized, icu, recovered, time)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cases"] = from_union([from_int, from_none], self.cases)
        result["deaths"] = from_union([from_int, from_none], self.deaths)
        result["hospitalized"] = from_union([from_int, from_none], self.hospitalized)
        result["icu"] = from_union([from_int, from_none], self.icu)
        result["recovered"] = from_union([from_int, from_none], self.recovered)
        result["time"] = self.time.isoformat()
        return result


class CaseCountsData:
    data: List[CaseCountsDatum]
    name: str

    def __init__(self, data: List[CaseCountsDatum], name: str) -> None:
        self.data = data
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'CaseCountsData':
        assert isinstance(obj, dict)
        data = from_list(CaseCountsDatum.from_dict, obj.get("data"))
        name = from_str(obj.get("name"))
        return CaseCountsData(data, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["data"] = from_list(lambda x: to_class(CaseCountsDatum, x), self.data)
        result["name"] = from_str(self.name)
        return result


class CaseCountsArray:
    all: List[CaseCountsData]

    def __init__(self, all: List[CaseCountsData]) -> None:
        self.all = all

    @staticmethod
    def from_dict(obj: Any) -> 'CaseCountsArray':
        assert isinstance(obj, dict)
        all = from_list(CaseCountsData.from_dict, obj.get("all"))
        return CaseCountsArray(all)

    def to_dict(self) -> dict:
        result: dict = {}
        result["all"] = from_list(lambda x: to_class(CaseCountsData, x), self.all)
        return result


class NumericRangeNonNegative:
    begin: float
    end: float

    def __init__(self, begin: float, end: float) -> None:
        self.begin = begin
        self.end = end

    @staticmethod
    def from_dict(obj: Any) -> 'NumericRangeNonNegative':
        assert isinstance(obj, dict)
        begin = from_float(obj.get("begin"))
        end = from_float(obj.get("end"))
        return NumericRangeNonNegative(begin, end)

    def to_dict(self) -> dict:
        result: dict = {}
        result["begin"] = to_float(self.begin)
        result["end"] = to_float(self.end)
        return result


class ScenarioDatumEpidemiological:
    hospital_stay_days: float
    icu_stay_days: float
    infectious_period_days: float
    latency_days: float
    overflow_severity: float
    peak_month: int
    r0: NumericRangeNonNegative
    seasonal_forcing: float

    def __init__(self, hospital_stay_days: float, icu_stay_days: float, infectious_period_days: float, latency_days: float, overflow_severity: float, peak_month: int, r0: NumericRangeNonNegative, seasonal_forcing: float) -> None:
        self.hospital_stay_days = hospital_stay_days
        self.icu_stay_days = icu_stay_days
        self.infectious_period_days = infectious_period_days
        self.latency_days = latency_days
        self.overflow_severity = overflow_severity
        self.peak_month = peak_month
        self.r0 = r0
        self.seasonal_forcing = seasonal_forcing

    @staticmethod
    def from_dict(obj: Any) -> 'ScenarioDatumEpidemiological':
        assert isinstance(obj, dict)
        hospital_stay_days = from_float(obj.get("hospitalStayDays"))
        icu_stay_days = from_float(obj.get("icuStayDays"))
        infectious_period_days = from_float(obj.get("infectiousPeriodDays"))
        latency_days = from_float(obj.get("latencyDays"))
        overflow_severity = from_float(obj.get("overflowSeverity"))
        peak_month = from_int(obj.get("peakMonth"))
        r0 = NumericRangeNonNegative.from_dict(obj.get("r0"))
        seasonal_forcing = from_float(obj.get("seasonalForcing"))
        return ScenarioDatumEpidemiological(hospital_stay_days, icu_stay_days, infectious_period_days, latency_days, overflow_severity, peak_month, r0, seasonal_forcing)

    def to_dict(self) -> dict:
        result: dict = {}
        result["hospitalStayDays"] = to_float(self.hospital_stay_days)
        result["icuStayDays"] = to_float(self.icu_stay_days)
        result["infectiousPeriodDays"] = to_float(self.infectious_period_days)
        result["latencyDays"] = to_float(self.latency_days)
        result["overflowSeverity"] = to_float(self.overflow_severity)
        result["peakMonth"] = from_int(self.peak_month)
        result["r0"] = to_class(NumericRangeNonNegative, self.r0)
        result["seasonalForcing"] = to_float(self.seasonal_forcing)
        return result


class DateRange:
    begin: datetime
    end: datetime

    def __init__(self, begin: datetime, end: datetime) -> None:
        self.begin = begin
        self.end = end

    @staticmethod
    def from_dict(obj: Any) -> 'DateRange':
        assert isinstance(obj, dict)
        begin = from_datetime(obj.get("begin"))
        end = from_datetime(obj.get("end"))
        return DateRange(begin, end)

    def to_dict(self) -> dict:
        result: dict = {}
        result["begin"] = self.begin.isoformat()
        result["end"] = self.end.isoformat()
        return result


class PercentageRange:
    begin: float
    end: float

    def __init__(self, begin: float, end: float) -> None:
        self.begin = begin
        self.end = end

    @staticmethod
    def from_dict(obj: Any) -> 'PercentageRange':
        assert isinstance(obj, dict)
        begin = from_float(obj.get("begin"))
        end = from_float(obj.get("end"))
        return PercentageRange(begin, end)

    def to_dict(self) -> dict:
        result: dict = {}
        result["begin"] = to_float(self.begin)
        result["end"] = to_float(self.end)
        return result


class MitigationInterval:
    color: str
    name: str
    time_range: DateRange
    transmission_reduction: PercentageRange

    def __init__(self, color: str, name: str, time_range: DateRange, transmission_reduction: PercentageRange) -> None:
        self.color = color
        self.name = name
        self.time_range = time_range
        self.transmission_reduction = transmission_reduction

    @staticmethod
    def from_dict(obj: Any) -> 'MitigationInterval':
        assert isinstance(obj, dict)
        color = from_str(obj.get("color"))
        name = from_str(obj.get("name"))
        time_range = DateRange.from_dict(obj.get("timeRange"))
        transmission_reduction = PercentageRange.from_dict(obj.get("transmissionReduction"))
        return MitigationInterval(color, name, time_range, transmission_reduction)

    def to_dict(self) -> dict:
        result: dict = {}
        result["color"] = from_str(self.color)
        result["name"] = from_str(self.name)
        result["timeRange"] = to_class(DateRange, self.time_range)
        result["transmissionReduction"] = to_class(PercentageRange, self.transmission_reduction)
        return result


class ScenarioDatumMitigation:
    mitigation_intervals: List[MitigationInterval]

    def __init__(self, mitigation_intervals: List[MitigationInterval]) -> None:
        self.mitigation_intervals = mitigation_intervals

    @staticmethod
    def from_dict(obj: Any) -> 'ScenarioDatumMitigation':
        assert isinstance(obj, dict)
        mitigation_intervals = from_list(MitigationInterval.from_dict, obj.get("mitigationIntervals"))
        return ScenarioDatumMitigation(mitigation_intervals)

    def to_dict(self) -> dict:
        result: dict = {}
        result["mitigationIntervals"] = from_list(lambda x: to_class(MitigationInterval, x), self.mitigation_intervals)
        return result


class ScenarioDatumPopulation:
    age_distribution_name: str
    case_counts_name: str
    hospital_beds: int
    icu_beds: int
    imports_per_day: float
    initial_number_of_cases: int
    population_served: int

    def __init__(self, age_distribution_name: str, case_counts_name: str, hospital_beds: int, icu_beds: int, imports_per_day: float, initial_number_of_cases: int, population_served: int) -> None:
        self.age_distribution_name = age_distribution_name
        self.case_counts_name = case_counts_name
        self.hospital_beds = hospital_beds
        self.icu_beds = icu_beds
        self.imports_per_day = imports_per_day
        self.initial_number_of_cases = initial_number_of_cases
        self.population_served = population_served

    @staticmethod
    def from_dict(obj: Any) -> 'ScenarioDatumPopulation':
        assert isinstance(obj, dict)
        age_distribution_name = from_str(obj.get("ageDistributionName"))
        case_counts_name = from_str(obj.get("caseCountsName"))
        hospital_beds = from_int(obj.get("hospitalBeds"))
        icu_beds = from_int(obj.get("icuBeds"))
        imports_per_day = from_float(obj.get("importsPerDay"))
        initial_number_of_cases = from_int(obj.get("initialNumberOfCases"))
        population_served = from_int(obj.get("populationServed"))
        return ScenarioDatumPopulation(age_distribution_name, case_counts_name, hospital_beds, icu_beds, imports_per_day, initial_number_of_cases, population_served)

    def to_dict(self) -> dict:
        result: dict = {}
        result["ageDistributionName"] = from_str(self.age_distribution_name)
        result["caseCountsName"] = from_str(self.case_counts_name)
        result["hospitalBeds"] = from_int(self.hospital_beds)
        result["icuBeds"] = from_int(self.icu_beds)
        result["importsPerDay"] = to_float(self.imports_per_day)
        result["initialNumberOfCases"] = from_int(self.initial_number_of_cases)
        result["populationServed"] = from_int(self.population_served)
        return result


class ScenarioDatumSimulation:
    number_stochastic_runs: int
    simulation_time_range: DateRange

    def __init__(self, number_stochastic_runs: int, simulation_time_range: DateRange) -> None:
        self.number_stochastic_runs = number_stochastic_runs
        self.simulation_time_range = simulation_time_range

    @staticmethod
    def from_dict(obj: Any) -> 'ScenarioDatumSimulation':
        assert isinstance(obj, dict)
        number_stochastic_runs = from_int(obj.get("numberStochasticRuns"))
        simulation_time_range = DateRange.from_dict(obj.get("simulationTimeRange"))
        return ScenarioDatumSimulation(number_stochastic_runs, simulation_time_range)

    def to_dict(self) -> dict:
        result: dict = {}
        result["numberStochasticRuns"] = from_int(self.number_stochastic_runs)
        result["simulationTimeRange"] = to_class(DateRange, self.simulation_time_range)
        return result


class ScenarioDatum:
    epidemiological: ScenarioDatumEpidemiological
    mitigation: ScenarioDatumMitigation
    population: ScenarioDatumPopulation
    simulation: ScenarioDatumSimulation

    def __init__(self, epidemiological: ScenarioDatumEpidemiological, mitigation: ScenarioDatumMitigation, population: ScenarioDatumPopulation, simulation: ScenarioDatumSimulation) -> None:
        self.epidemiological = epidemiological
        self.mitigation = mitigation
        self.population = population
        self.simulation = simulation

    @staticmethod
    def from_dict(obj: Any) -> 'ScenarioDatum':
        assert isinstance(obj, dict)
        epidemiological = ScenarioDatumEpidemiological.from_dict(obj.get("epidemiological"))
        mitigation = ScenarioDatumMitigation.from_dict(obj.get("mitigation"))
        population = ScenarioDatumPopulation.from_dict(obj.get("population"))
        simulation = ScenarioDatumSimulation.from_dict(obj.get("simulation"))
        return ScenarioDatum(epidemiological, mitigation, population, simulation)

    def to_dict(self) -> dict:
        result: dict = {}
        result["epidemiological"] = to_class(ScenarioDatumEpidemiological, self.epidemiological)
        result["mitigation"] = to_class(ScenarioDatumMitigation, self.mitigation)
        result["population"] = to_class(ScenarioDatumPopulation, self.population)
        result["simulation"] = to_class(ScenarioDatumSimulation, self.simulation)
        return result


class ScenarioData:
    data: ScenarioDatum
    name: str

    def __init__(self, data: ScenarioDatum, name: str) -> None:
        self.data = data
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'ScenarioData':
        assert isinstance(obj, dict)
        data = ScenarioDatum.from_dict(obj.get("data"))
        name = from_str(obj.get("name"))
        return ScenarioData(data, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["data"] = to_class(ScenarioDatum, self.data)
        result["name"] = from_str(self.name)
        return result


class ScenarioArray:
    all: List[ScenarioData]

    def __init__(self, all: List[ScenarioData]) -> None:
        self.all = all

    @staticmethod
    def from_dict(obj: Any) -> 'ScenarioArray':
        assert isinstance(obj, dict)
        all = from_list(ScenarioData.from_dict, obj.get("all"))
        return ScenarioArray(all)

    def to_dict(self) -> dict:
        result: dict = {}
        result["all"] = from_list(lambda x: to_class(ScenarioData, x), self.all)
        return result


class SeverityDistributionDatum:
    age_group: AgeGroup
    confirmed: float
    critical: float
    fatal: float
    isolated: float
    severe: float

    def __init__(self, age_group: AgeGroup, confirmed: float, critical: float, fatal: float, isolated: float, severe: float) -> None:
        self.age_group = age_group
        self.confirmed = confirmed
        self.critical = critical
        self.fatal = fatal
        self.isolated = isolated
        self.severe = severe

    @staticmethod
    def from_dict(obj: Any) -> 'SeverityDistributionDatum':
        assert isinstance(obj, dict)
        age_group = AgeGroup(obj.get("ageGroup"))
        confirmed = from_float(obj.get("confirmed"))
        critical = from_float(obj.get("critical"))
        fatal = from_float(obj.get("fatal"))
        isolated = from_float(obj.get("isolated"))
        severe = from_float(obj.get("severe"))
        return SeverityDistributionDatum(age_group, confirmed, critical, fatal, isolated, severe)

    def to_dict(self) -> dict:
        result: dict = {}
        result["ageGroup"] = to_enum(AgeGroup, self.age_group)
        result["confirmed"] = to_float(self.confirmed)
        result["critical"] = to_float(self.critical)
        result["fatal"] = to_float(self.fatal)
        result["isolated"] = to_float(self.isolated)
        result["severe"] = to_float(self.severe)
        return result


class SeverityDistributionData:
    data: List[SeverityDistributionDatum]
    name: str

    def __init__(self, data: List[SeverityDistributionDatum], name: str) -> None:
        self.data = data
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'SeverityDistributionData':
        assert isinstance(obj, dict)
        data = from_list(SeverityDistributionDatum.from_dict, obj.get("data"))
        name = from_str(obj.get("name"))
        return SeverityDistributionData(data, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["data"] = from_list(lambda x: to_class(SeverityDistributionDatum, x), self.data)
        result["name"] = from_str(self.name)
        return result


class SeverityDistributionArray:
    all: List[SeverityDistributionData]

    def __init__(self, all: List[SeverityDistributionData]) -> None:
        self.all = all

    @staticmethod
    def from_dict(obj: Any) -> 'SeverityDistributionArray':
        assert isinstance(obj, dict)
        all = from_list(SeverityDistributionData.from_dict, obj.get("all"))
        return SeverityDistributionArray(all)

    def to_dict(self) -> dict:
        result: dict = {}
        result["all"] = from_list(lambda x: to_class(SeverityDistributionData, x), self.all)
        return result


class Shareable:
    age_distribution_data: AgeDistributionData
    scenario_data: ScenarioData
    schema_ver: str
    severity_distribution_data: SeverityDistributionData

    def __init__(self, age_distribution_data: AgeDistributionData, scenario_data: ScenarioData, schema_ver: str, severity_distribution_data: SeverityDistributionData) -> None:
        self.age_distribution_data = age_distribution_data
        self.scenario_data = scenario_data
        self.schema_ver = schema_ver
        self.severity_distribution_data = severity_distribution_data

    @staticmethod
    def from_dict(obj: Any) -> 'Shareable':
        assert isinstance(obj, dict)
        age_distribution_data = AgeDistributionData.from_dict(obj.get("ageDistributionData"))
        scenario_data = ScenarioData.from_dict(obj.get("scenarioData"))
        schema_ver = from_str(obj.get("schemaVer"))
        severity_distribution_data = SeverityDistributionData.from_dict(obj.get("severityDistributionData"))
        return Shareable(age_distribution_data, scenario_data, schema_ver, severity_distribution_data)

    def to_dict(self) -> dict:
        result: dict = {}
        result["ageDistributionData"] = to_class(AgeDistributionData, self.age_distribution_data)
        result["scenarioData"] = to_class(ScenarioData, self.scenario_data)
        result["schemaVer"] = from_str(self.schema_ver)
        result["severityDistributionData"] = to_class(SeverityDistributionData, self.severity_distribution_data)
        return result


def age_distribution_array_from_dict(s: Any) -> AgeDistributionArray:
    return AgeDistributionArray.from_dict(s)


def age_distribution_array_to_dict(x: AgeDistributionArray) -> Any:
    return to_class(AgeDistributionArray, x)


def age_distribution_data_from_dict(s: Any) -> AgeDistributionData:
    return AgeDistributionData.from_dict(s)


def age_distribution_data_to_dict(x: AgeDistributionData) -> Any:
    return to_class(AgeDistributionData, x)


def age_distribution_datum_from_dict(s: Any) -> AgeDistributionDatum:
    return AgeDistributionDatum.from_dict(s)


def age_distribution_datum_to_dict(x: AgeDistributionDatum) -> Any:
    return to_class(AgeDistributionDatum, x)


def age_group_from_dict(s: Any) -> AgeGroup:
    return AgeGroup(s)


def age_group_to_dict(x: AgeGroup) -> Any:
    return to_enum(AgeGroup, x)


def case_counts_array_from_dict(s: Any) -> CaseCountsArray:
    return CaseCountsArray.from_dict(s)


def case_counts_array_to_dict(x: CaseCountsArray) -> Any:
    return to_class(CaseCountsArray, x)


def case_counts_data_from_dict(s: Any) -> CaseCountsData:
    return CaseCountsData.from_dict(s)


def case_counts_data_to_dict(x: CaseCountsData) -> Any:
    return to_class(CaseCountsData, x)


def case_counts_datum_from_dict(s: Any) -> CaseCountsDatum:
    return CaseCountsDatum.from_dict(s)


def case_counts_datum_to_dict(x: CaseCountsDatum) -> Any:
    return to_class(CaseCountsDatum, x)


def color_hex_from_dict(s: Any) -> str:
    return from_str(s)


def color_hex_to_dict(x: str) -> Any:
    return from_str(x)


def date_range_from_dict(s: Any) -> DateRange:
    return DateRange.from_dict(s)


def date_range_to_dict(x: DateRange) -> Any:
    return to_class(DateRange, x)


def integer_from_dict(s: Any) -> int:
    return from_int(s)


def integer_to_dict(x: int) -> Any:
    return from_int(x)


def integer_non_negative_from_dict(s: Any) -> int:
    return from_int(s)


def integer_non_negative_to_dict(x: int) -> Any:
    return from_int(x)


def integer_positive_from_dict(s: Any) -> int:
    return from_int(s)


def integer_positive_to_dict(x: int) -> Any:
    return from_int(x)


def mitigation_interval_from_dict(s: Any) -> MitigationInterval:
    return MitigationInterval.from_dict(s)


def mitigation_interval_to_dict(x: MitigationInterval) -> Any:
    return to_class(MitigationInterval, x)


def numeric_range_non_negative_from_dict(s: Any) -> NumericRangeNonNegative:
    return NumericRangeNonNegative.from_dict(s)


def numeric_range_non_negative_to_dict(x: NumericRangeNonNegative) -> Any:
    return to_class(NumericRangeNonNegative, x)


def percentage_from_dict(s: Any) -> float:
    return from_float(s)


def percentage_to_dict(x: float) -> Any:
    return to_float(x)


def percentage_range_from_dict(s: Any) -> PercentageRange:
    return PercentageRange.from_dict(s)


def percentage_range_to_dict(x: PercentageRange) -> Any:
    return to_class(PercentageRange, x)


def scenario_array_from_dict(s: Any) -> ScenarioArray:
    return ScenarioArray.from_dict(s)


def scenario_array_to_dict(x: ScenarioArray) -> Any:
    return to_class(ScenarioArray, x)


def scenario_datum_mitigation_from_dict(s: Any) -> ScenarioDatumMitigation:
    return ScenarioDatumMitigation.from_dict(s)


def scenario_datum_mitigation_to_dict(x: ScenarioDatumMitigation) -> Any:
    return to_class(ScenarioDatumMitigation, x)


def scenario_datum_population_from_dict(s: Any) -> ScenarioDatumPopulation:
    return ScenarioDatumPopulation.from_dict(s)


def scenario_datum_population_to_dict(x: ScenarioDatumPopulation) -> Any:
    return to_class(ScenarioDatumPopulation, x)


def scenario_data_from_dict(s: Any) -> ScenarioData:
    return ScenarioData.from_dict(s)


def scenario_data_to_dict(x: ScenarioData) -> Any:
    return to_class(ScenarioData, x)


def scenario_datum_from_dict(s: Any) -> ScenarioDatum:
    return ScenarioDatum.from_dict(s)


def scenario_datum_to_dict(x: ScenarioDatum) -> Any:
    return to_class(ScenarioDatum, x)


def scenario_datum_simulation_from_dict(s: Any) -> ScenarioDatumSimulation:
    return ScenarioDatumSimulation.from_dict(s)


def scenario_datum_simulation_to_dict(x: ScenarioDatumSimulation) -> Any:
    return to_class(ScenarioDatumSimulation, x)


def severity_distribution_datum_from_dict(s: Any) -> SeverityDistributionDatum:
    return SeverityDistributionDatum.from_dict(s)


def severity_distribution_datum_to_dict(x: SeverityDistributionDatum) -> Any:
    return to_class(SeverityDistributionDatum, x)


def severity_distribution_data_from_dict(s: Any) -> SeverityDistributionData:
    return SeverityDistributionData.from_dict(s)


def severity_distribution_data_to_dict(x: SeverityDistributionData) -> Any:
    return to_class(SeverityDistributionData, x)


def severity_distribution_array_from_dict(s: Any) -> SeverityDistributionArray:
    return SeverityDistributionArray.from_dict(s)


def severity_distribution_array_to_dict(x: SeverityDistributionArray) -> Any:
    return to_class(SeverityDistributionArray, x)


def shareable_from_dict(s: Any) -> Shareable:
    return Shareable.from_dict(s)


def shareable_to_dict(x: Shareable) -> Any:
    return to_class(Shareable, x)


def schema_ver_from_dict(s: Any) -> str:
    return from_str(s)


def schema_ver_to_dict(x: str) -> Any:
    return from_str(x)


def scenario_datum_epidemiological_from_dict(s: Any) -> ScenarioDatumEpidemiological:
    return ScenarioDatumEpidemiological.from_dict(s)


def scenario_datum_epidemiological_to_dict(x: ScenarioDatumEpidemiological) -> Any:
    return to_class(ScenarioDatumEpidemiological, x)
