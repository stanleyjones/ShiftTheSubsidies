class CreateSubsidies < ActiveRecord::Migration
  def self.up
    create_table :subsidies do |t|
      t.integer :amount, :default => nil
      t.string :currency, :default => "USD"
      t.date :date, :null => false
      t.references :institution
      t.references :entity
      t.references :project
      t.string :kind, :default => nil
      t.boolean :approved, :default => false
      t.string :source, :default => nil

      t.timestamps
    end
  end

  def self.down
    drop_table :subsidies
  end
end
