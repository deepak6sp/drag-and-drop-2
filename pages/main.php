<?php include "partials/header.php"; ?>
<?php $id = $_GET['id'];?>
<input id="hidden_id" value= "<? echo $id ?>" type="hidden" />

	<div id="main">
		<div id="side_bar">
			<p>Components panel</p>
			<div class="componentsPanel">
				<div class="row">
					<div class="col-sm-6 text-center addRow">
						<div class="row panel panel-default">
							row
						</div>
					</div>
					<div class="col-sm-6 text-center addColumn">
						<div class="columns panel panel-default">
						   <div class="columnText">column</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6 text-center addModule">
						<div class="addText panel panel-default">
							text
						</div>
					</div>
					<div class="col-sm-6 text-center addModule">
						<div class="addImage panel panel-default">
							image
						</div>
					</div>
				</div>
			</div>
			<p>Settings panel</p>
			<div class="settingsPanel">
				<div class="row ">
	        <div class="col-md-6 text-center deleteButton">
	          <button class="deleteSelection panel panel-default">Delete</button>
	        </div>
			  </div>
			</div> <!-- end settingspanel -->
		</div> <!-- end sidebar -->

		<form id="template">
			<div class="wrapper">
				<div class="initialRow">
					<div class="col-sm-12">
						+
					</div>
				</div>
			</div>
			<div class="submit_container">
				<input class="btn btn-primary" type="submit" value="save" ></input>
        <a target="_blank" href="/draganddrop2/pages/preview.php<?php echo '?id='.$id;?>" class="btn btn-primary" id="preview_button">preview</a>
			</div>
		</form>

	</div>



<?php include "partials/footer.php"; ?>
