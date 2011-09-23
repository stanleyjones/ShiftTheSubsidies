module ProjectsHelper

def region_options
	regions = Carmen::country_names
	regions << "Global"
	regions << "Regional - North America"
	regions << "Regional - Central America"
	regions << "Regional - South America"
	regions << "Regional - Caribbean"
	regions << "Regional - Central Asia"
	regions << "Regional - South Asia"
	regions << "Regional - Southeast Asia"
	regions << "Regional - East Asia"
	regions << "Regional - Sub-Saharan Africa"
	regions << "Regional - Middle East and North Africa"
	regions << "Regional - Europe"
	regions << "Regional - Asia and the Pacific"
	regions << "Regional - Africa"
	regions << "Regional - Latin America and the Caribbean"
	regions << "Regional - Pacific"
	regions << "Palestine"
	return regions.sort
end

end
