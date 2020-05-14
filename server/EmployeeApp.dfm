object EmployeeResource1: TEmployeeResource1
  OldCreateOrder = False
  Height = 300
  Width = 600
  object FDConnection1: TFDConnection
    Params.Strings = (
      'ConnectionDef=EMPLOYEE')
    FetchOptions.AssignedValues = [evRowsetSize]
    FetchOptions.RowsetSize = 100
    Connected = True
    LoginPrompt = False
    Left = 30
    Top = 16
  end
  object qryDEPARTMENT: TFDQuery
    Connection = FDConnection1
    SQL.Strings = (
      'select * from DEPARTMENT')
    Left = 130
    Top = 16
  end
  object dsrDEPARTMENT: TEMSDataSetResource
    AllowedActions = [List, Get, Post, Put, Delete]
    DataSet = qryDEPARTMENT
    Left = 130
    Top = 64
  end
  object qryEMPLOYEE: TFDQuery
    Connection = FDConnection1
    FetchOptions.AssignedValues = [evRowsetSize]
    FetchOptions.RowsetSize = 100
    UpdateOptions.AssignedValues = [uvGeneratorName]
    SQL.Strings = (
      'select * from EMPLOYEE')
    Left = 230
    Top = 16
  end
  object dsrEMPLOYEE: TEMSDataSetResource
    AllowedActions = [List, Get, Post, Put, Delete]
    DataSet = qryEMPLOYEE
    PageSize = 100
    Left = 230
    Top = 64
  end
  object qryJOB: TFDQuery
    Connection = FDConnection1
    SQL.Strings = (
      'select * from JOB')
    Left = 322
    Top = 16
  end
  object dsrJOB: TEMSDataSetResource
    AllowedActions = [List, Get, Post, Put, Delete]
    DataSet = qryJOB
    Left = 322
    Top = 64
  end
end
