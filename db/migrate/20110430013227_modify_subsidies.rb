class ModifySubsidies < ActiveRecord::Migration
  def self.up
  	rename_column :subsidies, :amount, :amount_usd
  	add_column :subsidies, :amount_original, :integer, :default => nil
  	change_column :subsidies, :date, :date, :default => nil
  end

  def self.down
  	rename_column :subsidies, :amount_usd, :amount
  	remove_column :subsidies, :amount_original
  	change_column :subsidies, :date, :date, :null => false
  end
end
